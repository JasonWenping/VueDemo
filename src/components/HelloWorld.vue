<template>
  <div class="hello">
    <headers-vue></headers-vue>
    <div class="container">
      <div class="jumbotron">
        <h2>{{ titles }}</h2>
        <p>{{ msg }}</p>
        <input type="text" class="form-control" placeholder="Input what you'r going to do...." v-model="inputValue">
        <button class="btn btn-primary" @click="addTask">Add Task</button>
      </div>

      <div class="row">
        <div class="col-xs-4">
          <div class="panel panel-info">
            <div class="panel-heading">Ready</div>
            <div class="panel-body">
              <ul v-if="task.length">
                <li v-for="(item,index) in task" :key="index">
                  <label><input type="checkbox" @change="changeState(index)"></label> 
                  {{ item.contents }} 
                  <button class="close" type="button" aria-label="Close" @click="delTask(index)">
                    <span aria-hidden="true">×</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xs-4">
          <div class="panel panel-warning">
            <div class="panel-heading">On going</div>
            <div class="panel-body"></div>
          </div>
        </div>
        <div class="col-xs-4">
          <div class="panel panel-success">
            <div class="panel-heading">Done</div>
            <div class="panel-body"></div>
          </div>
        </div>
      </div>
    </div>
    <footer-vue></footer-vue>
  </div>

</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'HelloWorld',
  components: {
    "headers-vue": Header,
    'footer-vue': Footer
  },
  data () {
    return {
      title: 'Todo list',
      msg: 'Provide a task or workspace management tool for everyone',
      inputValue: '',
      task: JSON.parse(localStorage.getItem('task')),
      newtask: []
    }
  }, 
  computed: {
    titles: function(){
      return this.title.toUpperCase();
    }
  },
  methods: {
    addTask: function(){
      if(this.inputValue){
        this.task.push({contents:this.inputValue, states:1});
        this.inputValue = '';
        localStorage.setItem('task', JSON.stringify(this.task));
        //console.log(this.task);
      }else{
        console.log('你还没有输入内容....')
      }
    },
    delTask: function(index){
      this.task.splice(index,1);
      localStorage.setItem('task', JSON.stringify(this.task));
    },
    changeState: function(index){
      return this.task[index].states ++;
      console.log(this.task[index].states)
    }
  },
  watch: {
    changeState: function(){
      this.task.states ++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container{
  .jumbotron{
    input[type='text']{
      width: 60%;
      min-width: 200px;
      margin: 0 auto 20px auto;
    }
    button{
      width: 40%px;
    }
  }
}
.row{
  ul{
    list-style-type: none;
    text-align: left;
      li{
      margin: 0;
      line-height: 35px;
      display: flex;
        label{
          display: flex;
          align-items: center;
          margin-right: 0.5rem;
        }
        button{
          margin-left: 20px;
        }
      }
  }
}
</style>
