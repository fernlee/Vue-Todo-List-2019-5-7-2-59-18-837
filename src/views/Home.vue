<template>
    <div class="home_page">
        <router-link to="/">返回</router-link>
        <div class="home_userName">UserName: {{userName}}</div>
        <side-bar></side-bar>
        <router-view/>
    </div>
</template>

<script>
    import SideBar from "../components/SideBar";
    export default {
        name: "Home",
        components: {SideBar},
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