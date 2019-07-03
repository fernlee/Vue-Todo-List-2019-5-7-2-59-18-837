<template>
    <div>
        <router-link to="/home">开始使用</router-link>
        <label>
            请输入姓名
            <input v-model="userName"
                   @blur="updateUserName"/>
        </label>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                userName: '',
            }
        },
        methods: {
            updateUserName() {
                this.$store.commit('updateUserName', this.userName);
            }
        }
    }
</script>

<style scoped>
    div {
        text-align: center;
    }

</style>