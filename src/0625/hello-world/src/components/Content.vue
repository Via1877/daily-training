<template>
    <div>
        <div class="">
            姓名：<input type="text" key="name" v-model="userName">
        </div>
        <div class="">
            密码：<input type="text" key="kwd" v-model="passWords">
        </div>
        <button @click="handelSubmit" type="">提交</button>
    </div>
   
</template>

<script>


export default {
    name:'Content',
    data () {
        return {
            passWords:'***',
            userName: 'name',
        }
    },
    methods: {
        handelSubmit: function(){
            this.$emit('submit',this.userName,this.passWords)
        }
    }
}
</script>

<style scope>

</style>
