export default {
    data: {
        todos: [
            {title: 'Parking Lot APP Refactor', completed: false},
            {title: 'Parking Lot APP 时序图', completed: true},
            {title: 'Parking Lot APP 中类的流程图', completed: false},
            {title: '总结Java和面向对象相关的概念和知识', completed: true},
            {title: '总结Parking Lot APP开发过程中的问题和经验', completed: false},
            {title: '总结TDD和Mock的应用经验', completed: false},
        ]
    },

    // Methods that you need, for e.g fetching data from server etc.

    fetchTodos() {
        // fetch logic
        return this.data.todos;
    },

    addTodo(title) {
        // add logic
        this.data.todos.push({title, completed: false})
    },

}