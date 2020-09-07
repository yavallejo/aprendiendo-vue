new Vue({
    el: '#app',

    data() {
        return {
            courses: [],
            title: '',
            time: 0,
            showError: false,
        }
    },

    computed: {
        totalTime (){
            let totalTime = 0;
            this.courses.forEach(function(course){
                totalTime += parseFloat(course.time)
            });
            return totalTime;
        }


    },

    methods: {
        addCourse (){
            if(this.time > 0) {
                this.courses.push({
                    title: this.title,
                    time: this.time,
                }),
                this.showError= false;


            }else{
                this.showError = !this.showError;
            }
            
            this.title = "";
            this.time = 0;
        }
        
    }
})