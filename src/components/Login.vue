<template>
<div id="app">
  <div class="container">
    <!-- 登录面板 -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <span>登录面板</span>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-1"></div>
          <div class="col-xs-10">
            <form id="form" action="post"  data-parsley-validate>
            <div>
              <span class="glyphicon glyphicon-user"></span>
              <input type="text" class="form-control" placeholder="用户名/手机/邮箱" v-model="username" data-index="1" data-parsley-required="true">
              <!-- <i v-if="showSpan">请输入用户名</i> -->
            </div>
            <div>
              <span class="glyphicon glyphicon-lock"></span>
              <input type="password" class="form-control" placeholder="密码" data-index="1" data-parsley-required="true">
            </div>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="验证码">
              <span class="input-group-btn">
                <button type="button" class="btn btn-info">获取验证码</button>
              </span>              
            </div>
            <router-link to="/Header"><button type="submit" class="btn btn-primary" @click="submitCheck">登 录</button></router-link>
            <button type="submit" class="btn btn-default">注 册</button>
            </form>
          </div>
          <div class="col-xs-1"></div>
        </div>
      </div>
    </div>
    <!-- 注册面板 -->

    <div class="panel panel-default" v-if="false">
      <div class="panel-heading">
        <span>注册面板</span>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-1"></div>
          <div class="col-xs-10">
            <div>
              <div class="col-sm-3"><label for="phone">手机号:</label></div>
              <div class="col-sm-9"><input type="text" class="form-control" name="phone"></div>
            </div>
            <div>
              <div class="col-sm-3"><label for="phone">验证码:</label></div>
              <div class="col-sm-9 input-group"><input type="text" class="form-control" name="phone"><span class="input-group-btn"><button type="button" class="btn btn-info">获取验证码</button></span></div>
            </div>
            <div>
              <div class="col-sm-3"><label for="phone">手机号:</label></div>
              <div class="col-sm-9"><input type="text" class="form-control" name="phone"></div>
            </div>
            <div>
              <div class="col-sm-3"><label for="phone">手机号:</label></div>
              <div class="col-sm-9"><input type="text" class="form-control" name="phone"></div>
            </div>
          </div>
          <div class="col-xs-1"></div>
        </div>
      </div>
    </div>
  </div>      
</div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      showSpan: false
    }
  },
  methods: {
    submitCheck: function(){
      if(this.username === ''){
        this.showSpan = true;
      }else{
        this.showSpan = false;
      }
    }
  }
}
  $(function(){
    //alert('ss');  
    $('#form').parsley();//调用parsley表单验证插件  
  });  
</script>
<style lang="scss" scoped>
.container{
  .panel{
    width: 40rem;
    margin: 20rem auto;
    .panel-heading{
      text-align: left;
    }
    .panel-body{
      text-align: center;
      .input-group{
        margin: 2rem 0;
      }
      .btn{
        width: 10rem;
      }
      .glyphicon{
        position: relative;
        float: left;
        left: 0.5rem;
        top: 2rem;
        z-index: 1;
        color: #999;
      }
      input[data-index='1']{
        padding-left: 2rem;
      }
    }
  }

}
</style>

