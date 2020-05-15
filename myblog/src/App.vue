<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import Canvas from './canvas-nest.min.js'
export default {
  name:'App',
  components:{
    Header,
    Footer,
    // Canvas
  }
}
</script>
<style lang="less">
HTML, body, div, h1, h2, h3, h4, h5, h6, ul, ol, dl, li, dt, dd, p, blockquote,
pre, form, fieldset, table, th, td {
    border:none;
    font-family:"微软雅黑","黑体","宋体";
    font-size:14px;
    margin:0px;
    padding:0px;
    }
html,body{
    height: 100%;
    width: 100%;
    }
address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
}
a{
    text-decoration:none;
}
a:link{
    color:#fff;
}
a:visited{
    color:#fff;
}
a:hover{
    color:#fff;
}
a:active{
    color:#fff;
}
input::-ms-clear{
    display:none;
    }
input::-ms-reveal{
    display:none;
}
input{
    -webkit-appearance: none;
    margin: 0;
    outline: none;
    padding: 0;
}
input::-webkit-input-placeholder{
    color: #ccc;
}
input::-ms-input-placeholder{
    color: #ccc;
}
input::-moz-placeholder{
    color: #ccc;
}
input[type=submit],input[type=button]{
    cursor: pointer;
}
button[disabled], input[disabled] {
    cursor: default;
}
img{
    border:none;
}
ul,ol,li{
    list-style-type:none;
}
/*公共方法*/
.clear{
    clear: both;
}
.clearleft{
    clear: left;
}
.clearright{
    clear: right;
}
.floatleft{
    float: left;
}
.floatright{
    float: right;
}
.cursor{
    cursor: pointer;
}
/*背景及色值表*/
.bg000{
    background: #000;
}
.color000{
    color: #000;
}
#app{
    background: url('http://www.palingking.com/images/bg.jpg') no-repeat;
    background-size: cover;
    background-attachment: fixed ;
    z-index: -1;
  .app-content{
    // width: 1400px;
    // margin: auto;
  }

}
// canvas{
//     background: url('./assets/bg.jpg') no-repeat;
//     opacity: 0.3;
// }
</style>
