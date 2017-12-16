<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{title}}</h1>
    <ul class="todos">
      <li v-for="(todo,index) in todos" :id="index" :class="{'checked':todo.done}">
        <label>{{index+1}}.{{todo.value}}</label>
        <time>{{todo.created | date}}</time>
      </li>
    </ul>
  </div>
</template>

<script>
import './assets/site.less';
import './assets/todos.less';
//导入时间格式化专用包
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
export default {
  name : 'app',
  data () {
    return {
      title : '备忘录',
      todos :  [
        {value:"阅读一本关于前端开发的书!",done:false,created:Date.now()},
        {value:"中午饭烹饪板栗炖鸡！",done:false,created:Date.now()+3600000},
        {value:"早上蒸紫薯吃!",done:true,created:Date.now()-3600000}
      ]
    }
  },
  //加入date过滤器
  filters: {
    date(val) {
      return moment(val).calendar();
    }
  }
}
</script>
