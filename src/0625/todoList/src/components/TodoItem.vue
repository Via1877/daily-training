<template>
  <li>{{content}}
    <button
      @click="handleClick"
      >
      删除
    </button>
  </li>
</template>

<script>
export default {
 props:['content','index'],
 methods:{
   handleClick () {
     this.$emit('delet',this.index)
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
