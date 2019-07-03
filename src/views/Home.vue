<template>
    <div class="home_page">
        <router-link to="/">返回</router-link>
        <div class="home_userName">{{userName}}</div>
        <todo-view></todo-view>
    </div>
</template>

<script>
    import TodoList from '../components/TodoList'

    export default {
        name: "Home",
        components: {
            TodoView: TodoList
        },
        data() {
            return { userName: this.$store.state.userName}
        }
    }
</script>

<style scoped>
    .home_page {
        margin-left: 100px;
        margin-right: 100px;
    }
    .home_userName {
        float: right;
    }

</style>