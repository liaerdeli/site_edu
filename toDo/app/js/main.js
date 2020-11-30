new Vue({
    el: '#app',
    data: {
        text: null,
        tasks: [
            {
                taskStatus: false,
                taskText: 'Сделать из Ани суперпрограммиста'
            }



        ]

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
        }

    }
})