+ 普通input中使用v-model
```
  <div id="root">
        <input type="text" v-model="msg">
        <p> {{msg}} </p>
    </div>

    <script>
    new Vue({
        el:"#root",
        data:{
            msg:'',
        }
    })
    </script>
```
+ 在组件中使用
    + 官方文档
    ```
    <input v-model="searchText">
    // 等价于下面的， v-model相当于是语法糖
    <input
        v-bind:value="searchText"
        v-on:input="searchText = $event.target.value"
    >
    ```
    当用在组件上时，v-model 则会这样：
    ```
    <custom-input
        v-bind:value="searchText"
        v-on:input="searchText = $event"
    ></custom-input>
    ```
    + 为了让它正常工作，这个组件内的 <input> 必须：
        + 将其 value 特性绑定到一个名叫 value 的 prop 上
        + 在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
    ```
    <custom-input v-model="searchText"></custom-input>
    
    Vue.component('custom-input', {
        props: ['value'],
        template: `
            <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
            >
        `
    })
    ```