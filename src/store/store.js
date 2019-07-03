import Vue from 'vue'
import Vuex from 'vuex';
import {add, fetchTodos} from '../api/todos';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        fetchTodos(state, todos) {
            state.todos = todos;
        },

        addTodo(state, payload) {
            state.todos.push(payload)
        },
        toggleTodo(state, payload) {
            state.todos[payload.index].status = payload.status;
        },
        updateTodoContent(state, payload) {
            state.todos[payload.index].content = payload.content;
        },
    },
    actions: {
        fetchTodos({commit}) {
            fetchTodos().then((response) => {
                commit('fetchTodos', response);
            }).catch(error => console.log(error.statusText))
        },
        addTodo({commit}, payload) {
            add(payload).then(() => {
                commit('addTodo', payload);
            }).catch(error => console.log(error.statusText))
        }
    }
})