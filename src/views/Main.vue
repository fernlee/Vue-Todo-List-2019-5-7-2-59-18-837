<template>
    <p>
        <router-link to="/home">开始使用</router-link>
        <label>
            请输入姓名
            <input/>
        </label>

    </p>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
    p {
        text-align: center;
    }

</style>