<script setup>

import { ref, onMounted } from 'vue'
import { useTaskStore } from '@/stores/task'
import DeleteButton from '../components/DeleteButton.vue'
import Details from '@/components/Details.vue'

const app_name = ref(import.meta.env.VITE_APP_NAME)
const task = useTaskStore()
const itemRefs = ref([])

onMounted(() => {
  task.task_list()
  console.log(itemRefs.value)
})

</script>

<template>
  <main class="container">

    <div class="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm">
      <div class="lh-1">
        <h1 class="h6 mb-0 text-white lh-1">{{ app_name }}</h1>
        <small></small>
      </div>
    </div>

    <div class="my-3 p-3 bg-body rounded shadow-sm">

      <form class="row g-3" @submit.prevent="task.store_task">
        <div class="col-11">
          <label for="task" class="visually-hidden">task name</label>
          <input type="text" v-model="task.data.name" class="form-control" id="task" placeholder="nombre de la tarea"
            autofocus>
        </div>
        <div class="col-1">
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary" :disabled="task.block_btn_add" title="guardar"> <i
                class="bi bi-floppy2"></i></button>
          </div>
        </div>
      </form>

    </div>

    <div class="my-3 p-3 bg-body rounded shadow-sm">
      <h6 class="border-bottom pb-2 mb-0">Tareas</h6>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tarea</th>
            <th scope="col">Culminada</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in task.tasks">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ item.name }}</td>
            <td>
              <span v-if="item.is_done" class="badge text-bg-success">Culminada</span>
              <span v-else class="badge text-bg-warning">No culminada</span>
            </td>
            <td>
              <div class="hstack gap-2">
                <div class="">
                  <Details :id="item.id" />
                </div>
                <div class="">
                  <DeleteButton :id="item.id" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style></style>
