import React from 'react';
import logo from './logo.svg';
import './App.css';


import RouterIndex from './router/index'
import Mianheader from './view/mian-header';
import Mianfooter from './view/mian-footer';
/*
  1.react-router-dom
  2.antd

  3.react-redux
  4.react-thunk
  5.redux
  6.axios
  7.

  三个板块
    头,身体,底部
  路由模块
  1.详情内容的模块 details
  2.首页模块     index
  3.教程 book
  4.关于 about
  5.用户模块 user

*/
function App() {
  return (
    <div className="App">
      <Mianheader></Mianheader>
      <RouterIndex></RouterIndex>
      <Mianfooter></Mianfooter>
    </div>
  );
}

export default App;
