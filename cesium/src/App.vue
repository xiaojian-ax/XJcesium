<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './style/theme/index.css';
  html, body{
    height: 100%;
    margin: 0;
    padding: 0;
    
  }

  .el-input__inner{
      color: #ffffff;
      background-color: #0c0c0c;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width:100%;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
