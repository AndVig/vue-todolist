const {createApp}= Vue;
createApp({
    data(){
        return{
            title: 'ToDo List',
            newTask:null,
            searchTask:'',
            tasks:[
                {
                    text: 'Task 1',
                    done: false,
                },
                {
                    text: 'Task 2',
                    done: false,
                },
                {
                    text: 'Task 3',
                    done: false,
                },
                {
                    text: 'Task 4',
                    done: false,
                },
            ],
        }
    },
    methods:{
        removeTask(indexRicevuto){
            this.tasks=this.tasks.filter((task,index)=>{
                return index!==indexRicevuto;
            });
        },
        addTask(){
            if(!this.newTask)return;
            const myTask={
                text: this.newTask.trim(),
                done:false,
            };
            this.tasks.push(myTask);
        },
        toggleTask(indexRicevuto){
            this.tasks[indexRicevuto].done=!this.tasks[indexRicevuto].done;

            // if(this.tasks[indexRicevuto].done){
            //     this.tasks[indexRicevuto].done=false;
            // }else{
            //     this.tasks[indexRicevuto].done=true;
            // }
        },
        // findTask(){
        //     this.tasks=this.tasks.filter((element)=>{
        //         return element.text.includes(this.searchTask);
        //     })
        // },
        listTask(){
            if(this.searchTask){
                return this.tasks.filter((element)=>{
                    return element.text.includes(this.searchTask);
                })
            }else{
                return this.tasks;
            }
        },
    }
}).mount("#app")