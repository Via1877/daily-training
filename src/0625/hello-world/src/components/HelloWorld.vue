<template>
  <div class="hello">
      <p >欢迎，{{userName}}</p>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data:function(){
    return {
      showNum : this.userName,
    }
  },
  props: {
    userName:String,
  },
  methods: {
 
  },
/*   created(){
    eventBus.$on('changeName',(userName) => {
      consoel.log(userName)
    } )
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
