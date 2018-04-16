<template>
  <div id="app">
      <nav class="navbar navbar-inverse">
          <div class="container">
              <div class="navbar-header">
                  <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#myCollapse">
                      <span class="sr-only">Toggle</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a href="#" class="navbar-brand">Jason-Web</a>
              </div>
              <div class="collapse navbar-collapse" id="myCollapse">
                  <ul class="nav navbar-nav navbar-right" style="margin-top: 0px;">
                      <li class="active"><router-link :to="{name:'HelloWorld'}"><span class="glyphicon glyphicon-home"></span> Home</router-link></li>
                      <li><router-link :to="{name:'List'}"><span class="glyphicon glyphicon-th-list"></span> List</router-link></li>
                      <li><router-link :to="{name:'Task'}"><span class="glyphicon glyphicon-tasks"></span> Task</router-link></li>
                    </ul>
                </div>
          </div>
      </nav>
      <router-view></router-view>
  </div>
</template>
<script>
import HelloWorld from '@/components/Helloworld'
import List from '@/components/List'
import Task from '@/components/Task'
export default {
  name: 'Header',
  components: {
      'hello-world': HelloWorld,
      'list-page': List,
      'task-page': Task
  }
}
</script>
<style lang='scss' scoped>
    // $color: red;

    // ul li a{
    //     color: $color
    // }
</style>


