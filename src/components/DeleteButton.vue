<script setup>
import { useTaskStore } from '@/stores/task'
import { onMounted, ref } from 'vue';

const props = defineProps({
    id: Number,
})

const task = useTaskStore()
const delete_button = ref(null)

const idbtn = 0

const deletee = ref(null)

onMounted(()=>{
    console.log(deletee.value);
})


const delete_task = (id) =>{
    // const btn = document.getElementById(normal.value)
    // btn.setAttribute("disabled", true)
    // task.delete_task(id).then(resp=>{
    //     console.log(resp);
    // })
    task.delete_task(id)
}

</script>
<template>
    <!-- <button :id="id"  v-if="task.block_btn_delete" class="btn btn-outline-danger" type="button" disabled>
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span class="visually-hidden" role="status">Loading...</span>
    </button> -->

    <button :id="id" type="button" ref="deletee" :disabled="task.block_btn_delete" class="btn btn-danger"
        @click="delete_task(id)" title="delete">
        <i class="bi bi-trash"></i>
    </button>
</template>