import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {content: 'Parking Lot APP Refactor', status: "active"},
            {content: 'Parking Lot APP 时序图', status: "completed"},
            {content: 'Parking Lot APP 中类的流程图', status: "active"},
            {content: '总结Java和面向对象相关的概念和知识', status: "completed"},
            {content: '总结Parking Lot APP开发过程中的问题和经验', status: "active"},
            {content: '总结TDD和Mock的应用经验', status: "active"},
        ]
    },
    mutations: {
        addTodo(state, payload) {
            state.todos.push({content: payload.content, completed: false})
        },
        toggleTodo(state, payload) {
            state.todos[payload.index].status = payload.status;
        },
        updateTodocontent(state, payload) {
            state.todos[payload.index].content = payload.content;
        },
    }
})