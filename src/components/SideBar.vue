<template>
    <ul>
        <li>
            <router-link to="/home/todo">TodoList列表</router-link>
        </li>
        <li>
            <router-link to="/home/info">我的</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

</style>