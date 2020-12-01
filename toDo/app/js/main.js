new Vue({
    el: '#app',
    data: {
        text: null,
        tasks: [
            {
                taskStatus: false,
                taskText: 'Сделать из Ани суперпрограммиста'
            }
        ],
        tasksState: 'all'

    },
    computed: {
        filteredTasks: function () {
             if (this.tasksState === 'completed') {
                return this.completedTasks
             } else if (this.tasksState === 'uncompleted') {
                return this.uncompletedTasks
            } else {
                return this.tasks
            }

        },
        completedTasks: function () {
            return this.tasks.filter(function (task) {
                return task.taskStatus === true
            })
        },
        uncompletedTasks: function () {
            return this.tasks.filter(function (task) {
                return task.taskStatus === false
            })
        }
    },
    methods: {
        add: function () {
            if (this.text !== '') {
                this.tasks.push({
                    taskStatus: false,
                    taskText: this.text
                })
                this.text = ''
            }
        },
        changeTaskStatus: function (task) {
            task.taskStatus = !task.taskStatus
        },
        deleteTask: function (index) {
            this.$delete(this.tasks, index)
        },
        statusIcon: function (task) {
            return {
                'glyphicon-unchecked': task.taskStatus === false,
                'glyphicon-check': task.taskStatus === true
            }

        },
        statusItem: function (task) {
            return {
                'app__tasks-done': task.taskStatus === true
            }
        },
        changeState: function (tasksState) {
            this.tasksState = tasksState

        },
        navIcon: function (navState) {
            return {
                'active': this.tasksState === navState
            }
        }


    }
})