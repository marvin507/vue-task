import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('task', {
    state: () => ({

        base_url: import.meta.env.VITE_BASE_URL,
        data: {
            name: null,
            is_done: false
        },
        tasks: {},
        details:{
            name: null,
            note: null,
            is_done: null
        },
        block_btn_add: false,
        block_btn_delete: false

    }),
    actions: {
        task_list() {
            axios({
                url: this.base_url + 'api/task',
                method: 'get'
            })
                .then(resp => {
                    this.tasks = resp.data.data
                })
        },
        store_task() {
            this.block_btn_add = !this.block_btn_add
            axios({
                url: this.base_url + 'api/task',
                method: 'post',
                data: this.data
            })
                .then(resp => {
                    this.task_list()
                })
                .finally(() => {
                    this.block_btn_add = !this.block_btn_add
                    this.data = {
                        name: null,
                        is_done: false
                    }
                })
        },
        get_task(id){
            this.details = {}
            axios({
                url: this.base_url + 'api/task/'+id,
                method: 'get'
            })
            .then(resp=>{
                this.details = resp.data.data
            })
        },
        update_task(id){
            console.log(this.details);
            axios({
                url: this.base_url + 'api/task/'+id,
                method: 'put',
                data: this.details
            })
            .then(resp=>{
                console.log(resp.data);
                this.task_list()
            })

        },
        delete_task(id) {

            let message = "¿Estás seguro que deseas eliminar el registro?"

            //if (confirm(message) == true) {

                this.block_btn_delete = !this.block_btn_delete

                axios({
                    url: this.base_url + 'api/task/' + id,
                    method: 'delete'
                })
                    .then(resp => {
                        this.task_list()
                        return resp.data
                    })
                    .finally(() => {
                        this.block_btn_delete = !this.block_btn_delete
                    })
            //}

        }
    },
})