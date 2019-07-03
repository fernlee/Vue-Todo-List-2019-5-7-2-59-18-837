import Vue from 'vue'
import Vuex from 'vuex';
import {add, update, fetchTodos} from '../api/todos';

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
            state.todos[payload.id-1].status = payload.status;
        },
        updateTodo(state, payload) {
            state.todos[payload.id-1].content = payload.content;
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
        },
        updateTodo({commit}, payload) {
            update(payload.id, payload).then(() => {
                commit('updateTodo', payload);
            }).catch(error => console.log(error.statusText))
        },

        toggleTodo({commit}, payload) {
            update(payload.id, payload).then(() => {
                commit('toggleTodo', payload);
            }).catch(error => console.log(error.statusText))
        },
    }
})