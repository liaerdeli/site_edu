new Vue({
    el: '#app',
    data: {
        text: null,
        tasks: [
            'Сделать из Ани классного программиста:)'
        ]

    },
    methods: {
        add: function () {
            if (this.text !== '') {
                this.tasks.push(this.text)
                this.text = ''
            }
        }
    }
})