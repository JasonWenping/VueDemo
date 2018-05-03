<template>
<div id="app">
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a href="#" class="navbar-brand">Jason-Web</a>
            </div>           
        </div>
    </nav>
    <div class="col-xs-8">
      <div class="carousel slide" id="myCarousel">
        <div class="carousel-inner">
          <div class="item slide1 active"></div>
          <div class="item slide2"></div>
          <div class="item slide3"></div>
        </div>
      </div>
    </div>
    <div class="col-xs-4" style="padding:0 5rem;">
    <!-- 登录面板 -->
    <div class="panel panel-default" v-if="!showRegister">
      <div class="panel-heading">
        <span>登录面板</span>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-1"></div>
          <div class="col-xs-10">
            <form id="form" action="post"  data-parsley-validate>
              <div class="input-no-group">
                <span class="glyphicon glyphicon-user"></span>
                <input type="text" class="form-control" placeholder="用户名/手机/邮箱" @blur="isUsrFill = (username=='')" v-model="username" data-index="1" :class="{inputErro: isUsrFill}">
                <!-- <i v-if="showSpan">请输入用户名</i> -->
              </div>
              <div class="input-no-group">
                <span class="glyphicon glyphicon-lock"></span>
                <input type="password" class="form-control" v-model="password" placeholder="密码" @blur="isPswFill = (password=='')" data-index="1" :class="{inputErro: isPswFill}">
              </div>
              <div class="input-group">
                <input id="inputCode" type="text" class="form-control" v-model="verifycode" placeholder="验证码" @blur="isCodeFill = (verifycode=='')" :class="{inputErro: isCodeFill}"><label id="verifyCode" class="input-group-addon"></label>
              </div>
              <button id="log-btn" type="submit" class="btn btn-primary" @click="formVerify">登 录</button>
              <button type="button" class="btn btn-default" @click="switchPanel">注 册</button>
            </form>
          </div>
          <div class="col-xs-1"></div>
        </div>
      </div>
    </div>
    <!-- 注册面板 -->

    <div class="panel panel-default" v-if="showRegister">
      <div class="panel-heading">
        <span>注册面板</span>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-1"></div>
          <div class="col-xs-10">            
            <form id="form" action="post"  data-parsley-validate>
            <div class="regis_input celphone">
            <label for="phone">手机号:</label>
            <input type="text" class="form-control" name="phone" required>
            </div>
            <div class="regis_input verification">
            <label for="phone">验证码:</label>
            <div class="input-group"><input type="text" class="form-control" name="phoneVerify" required><span class="input-group-btn"><button type="button" class="btn btn-info">获取验证码</button></span></div>
            </div>
            <div class="regis_input celphone">
            <label for="phone">密码:</label>
            <input type="password" class="form-control" name="password" required>
            </div>
            <div class="regis_input celphone">
            <label for="phone">确认密码:</label>
            <input type="password" class="form-control" name="repassword" required>
            </div>
            <button type="button" id="check-btn" class="btn btn-primary">注 册</button><span @click="switchPanel">有账号，去登录</span>
            </form>
          </div>
          <div class="col-xs-1"></div>
        </div>
      </div> 
    </div>
    </div>
    <footer-vue></footer-vue>
</div>    
</template>
<script>
import Header from '@/components/Header'
import '../../static/lib/verify.js'
import '../../static/lib/parsley.min.js'
import Footer from '@/components/Footer'
export default {
  name: 'Login',
  components: {
    'footer-vue': Footer
  },
  data() {
    return {
      username: '',
      password: '',
      showSpan: false,
      verifycode: '',
      showRegister: false,
      isUsrFill: false,
      isPswFill: false,
      isCodeFill: false,
      userList: JSON.parse(localStorage.getItem('users'))
    }
  },
  mounted(){
    this.getServerData();
    this.loadVerify()
  },
  methods: {
    switchPanel: function(){
      this.showRegister = !this.showRegister;
    },
    getServerData: function(){
      this.$axios.get('/api/data')
       .then(function(response){
          var userlist = response.data.data.users
          localStorage.setItem('users',JSON.stringify(userlist))
          sessionStorage.setItem('usr','')
       })
       .catch(function(error){
         console.log('Bad request !!!')
       })
    },
    formVerify: function(e){
      e.preventDefault();
      if(!this.username){
        this.isUsrFill = true;
      }else if(!this.password){
        this.isUsrFill = false
        this.isPswFill = true
      }else if(!this.verifycode){
        this.isPswFill = false
        this.isCodeFill = true
      }else{
        const nameArr = []
        this.userList.forEach(element => {
          nameArr.push(element.username)          
        });
        if(nameArr.indexOf(this.username) != -1){
          var pass = this.userList[nameArr.indexOf(this.username)].password
          if(this.password === pass){
            alert('登录成功！')
            location.href = './header#/header'
            sessionStorage.setItem('usr',JSON.stringify(this.userList[nameArr.indexOf(this.username)]))
          }else{
            console.log('密码错误！')
          }
        }else{
          console.log('用户名不存在！')
        }
      }      
    },
    loadVerify: function(){
      $('#myCarousel').carousel();
      $('#verifyCode').codeVerify({
          type : 1,
          width : '200px',
          height : '32px',
          fontSize : '20px',
          fontFamily : 'Helvetica',
          codeLength : 4,
          btnId : 'log-btn',
          inputId : 'inputCode',
          ready : function() {
          },
          success : function() {
              //alert('验证匹配！');
              //console.log('验证成功！');
          },
          error : function() {
              alert('验证码不匹配！');
              //console.log('验证码不匹配！');
          }
      }); 
    }
  }
}
  $(function(){
  });  
</script>
<style lang="scss" scoped>
@mixin input{
}
#app{
  .col-xs-8{
    padding: 0;
    .carousel-inner{
      margin-top: 15rem;
      .item{
        width: 100%;
        height: 40rem;  
        border-radius: 0 1rem 1rem 0;
      }
      .slide1{
        background: url('./../assets/images/log_gallery_bg1.jpg') no-repeat 100% center;
      }
      .slide2{
        background: url('./../assets/images/log_gallery_bg2.jpg') no-repeat 100% center;
      }
      .slide3{
        background: url('./../assets/images/log_gallery_bg3.jpg') no-repeat 100% center;
      }
    }
  }
  .panel{
    min-width: 29rem;
    margin: 20rem auto;
    border-radius: 0.5rem;
    .panel-heading{
      text-align: left;
    }
    .panel-body{
      text-align: center;
      .input-group{
        margin: 2rem 0;
      }
      .input-no-group{
        margin: 0.5rem 0;
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
      .inputErro{
        border: 1px solid red;
        box-shadow: 0 0 2px rgba($color: rgba(231, 38, 38, 0.973), $alpha: 0.8);
      }
      #verifyCode{
        padding: 0;
        min-width: 100px;
      }
      .regis_input{
        display: flex;
        margin: 1rem 0;
        label{
          display: flex;
          height: 34px;
          min-width: 22%;
          align-items: center;
          justify-content: left;
        }
        .input-group{
          margin: 0;
        }
      }
    }
  }

}
</style>

