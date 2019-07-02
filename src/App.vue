<template>
    <div id="app">
        <todo-view msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import TodoView from './components/TodoView.vue'

    export default {
        name: 'app',
        components: {
            TodoView: TodoView
        }
    }
</script>