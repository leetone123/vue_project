<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{title}}</h2>
    <ul>
      <li v-for="(todo,index) in todos" :id="index">
        <label>{{index+1}}.{{todo.value}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'app',
  data () {
    return {
      title : 'Vue-todoList',
      msg : 'Welcome to Your Vue.js App',
      todos :  [
        {value:"阅读一本关于前段开发的书!",done:false},
        {value:"中午饭烹饪板栗炖鸡！",done:false},
        {value:"早上蒸紫薯吃!",done:true}
      ]
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

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
