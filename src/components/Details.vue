<script setup>
import { useTaskStore } from '@/stores/task'

const task = useTaskStore()

const props = defineProps({
    id: Number,
})

</script>
<template>
    <button @click="task.get_task(props.id)" class="btn btn-info" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <i class="bi bi-eye"></i>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <div class="form-check">
                <input class="form-check-input" v-model="task.details.is_done" type="checkbox" id="is_done" >
                <label class="form-check-label" for="is_done">
                    Culminada
                </label>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <form @submit.prevent="task.update_task(task.details.id)">
                <div class="mb-3">
                <input type="text" class="form-control" id="name" placeholder="nombre de la tarea" v-model="task.details.name">
                </div>
                <div class="mb-3">
                <textarea class="form-control" id="notes" v-model="task.details.note" rows="3" placeholder="notas"></textarea>
                </div>
                <div class="mb-3">
                    <button class="btn btn-outline-success" type="submit">Guardar</button>
                </div>

            </form>
            
        </div>
    </div>
</template>