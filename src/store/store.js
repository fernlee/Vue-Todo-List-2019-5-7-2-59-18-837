import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {title: 'Parking Lot APP Refactor', completed: false},
            {title: 'Parking Lot APP 时序图', completed: true},
            {title: 'Parking Lot APP 中类的流程图', completed: false},
            {title: '总结Java和面向对象相关的概念和知识', completed: true},
            {title: '总结Parking Lot APP开发过程中的问题和经验', completed: false},
            {title: '总结TDD和Mock的应用经验', completed: false},
        ]
    },
    mutations: {
        addTodo(state, payload) {
            state.todos.push({title: payload.title, completed: false})
        },
        toggleTodo(state, payload) {
            state.todos[payload.index].completed = !payload.completed;
        },
    }
})