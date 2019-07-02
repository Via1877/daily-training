+ 组件 某一部分
+ 定制一个组件，组件间的通信
+ v-bing="这里的都是js表达式"
+ 挂载点，模板，实例之间的关系
   + 处理挂载点之下的内容，el属性 的DOM节点
   + 模板：挂载点内部的内容都是模板内容，template
   +  实例，指定怪哉点，模板，Vue生成实例
+ 数据事件与方法
   + 指令
      + v-text
      + v-html
      + v-on:绑定事件="函数"=>@:click
+ 属性绑定和双向数据绑定
   + v-bind:title="title"：当前这个title属性和下面的数据项title绑定了
   + 双向数据绑定
      +  v-model
+ 计算属性侦听器
   + computed,一个属性通过另一个属性计算而来，数据没有改变，会使用上一次的缓存。其中一个依赖属性发生改变，重新计算。
   + 侦听器，监听某一数据的变化，一旦数据发生变化，就执行侦听器的逻辑
+ v-if v-show v-for
   + v-if false 标签不渲染
   + v-show display 多次使用更适合
   + v-for 循环展示 :key 提升效率，值不能相同，列表频繁变更，不建议index;
+ 组件 
   + 全局组件Vue.component
   + 局部组件 var Name = {template:``  },在实例中注册组件，才能使用。
   + 传参
   ```
    :content="item" //绑定了connent,值就是 item of lists 的item
     props:['content'] //接收了传递进来的connent的属性
    ```
    向组件里传递 connet,
+ 每一个组件都是一个实例,可添加data。methods，等属性
+ 在Vue中，父组件向子组件传递值，是通过属性的。是属性，是属性，如上 content
+ 删除数据，是删除父组件上lists的数据。实现子组件的删除，对应的父组件的数据要删除。点击子组件，实现子父通信。发送订阅模式。
   + this.$emit('delet',this.index) 调用this.$emit 方法，出发delet事件，传进去index的值
   父组件，监听子组件的dele方法，v-on:delet="handelDelete"

+ 列表渲染，数组方法
   + push
   + pop
   + shift
   + unshift
   + sort
   + splice
   + reverse
   + set方法
   ```
   // 改变数组的方法
   改变引用
   改变变异方法
   Vue.set(vm.info,1(下标),"beijing");
   ```
+ 模板占位符template 帮助循环但不会渲染
+ 循环对象 （item：键值，key：键名，index：索引）
   + 动态加值，更改对象的引用可以，调用属性更改，没有用
   + set方法
      ```
      // 改变对象的方法
      Vue.set(vm.info,"address","beijing");
      vm.$set(vm.info,"address","beijing")
      ```