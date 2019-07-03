<template>
    <todo-view></todo-view>
</template>

<script>
    import TodoList from '../components/TodoList'
    export default {
        name: "Home",
        components: {
            TodoView: TodoList
        }
    }
</script>

<style scoped>

</style>