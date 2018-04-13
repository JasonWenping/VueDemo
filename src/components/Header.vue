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
                      <li class="active"><a href="#"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                      <li><a href="#"><span class="glyphicon glyphicon-th-list"></span> List</a></li>
                      <li><a href="#"><span class="glyphicon glyphicon-tasks"></span> Task</a></li>
                    </ul>
                </div>
          </div>
      </nav>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang='scss' scoped>
    // $color: red;

    // ul li a{
    //     color: $color
    // }
</style>


