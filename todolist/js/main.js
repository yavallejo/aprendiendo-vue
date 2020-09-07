new Vue({
    el: "#app",
    data() {
        return{
            todolist: [
                {id: 1, title:"Tarea 1"},
                {id: 2, title:"Tarea 2"},
                {id: 3, title:"Tarea 3"},
                {id: 4, title:"Tarea 4"}
            ],
            tarea: "",
            editing: null,
        }
    },
    methods: {
        insertarTarea() {
            this.todolist.push({
                id: this.todolist.length + 1,
                title: this.tarea
            });
            this.saveLocalStorage();
            this.tarea= "";
        },
        eliminarTarea(key) {
            this.todolist.splice(key,1);
            this.saveLocalStorage();
        },
        editarTarea(key) {
            this.editing = key;
            const span =  this.$refs[`span-${key}`][0];
            span.focus();
        },
        terminarEdicion(key) {
            this.editing = null;
            const span = this.$refs[`span-${key}`][0];
            this.todolist[key].title = span.innerHTML;
            this.saveLocalStorage();
        },
        saveLocalStorage() {
            window.localStorage.setItem('todolist', JSON.stringify(this.todolist));
        }
    },

    mounted() {
        this.todolist = JSON.parse(window.localStorage.getItem("todolist"));
    }
    
})