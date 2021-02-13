const app = {
    data() {
        return {
            tasks: [{title: 'Siamese', image: './images/1.jpg', done: false },
                    {title: 'Exotic', image: './images/2.jpg', done: false},
                    {title: 'Persian', image: './images/3.jpg', done: false}]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countLike(){
            return this.tasks.filter( t => t.done).length
        }
    }
}
Vue.createApp(app).mount('#app')