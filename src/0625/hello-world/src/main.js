import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//创建一个eventBus解决兄弟组件之间的传递
//export const eventBus = new Vue()

new Vue({

  render: h => h(App),

}).$mount('#app')
