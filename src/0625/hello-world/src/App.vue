<template>
  <div id="app">
    <hello-world :userName="userName"></hello-world>
    <Content @submit="welcome"></Content>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Content from './components/Content.vue'

export default {
  data (){
    return {
        userName: '',
      }
  },
  name: 'app',
  components: {
    HelloWorld,
    Content
  },
  methods: {
    welcome: function (userName) {
      alert(userName)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
