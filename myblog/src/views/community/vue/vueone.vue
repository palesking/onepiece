<template>
    <div class="vueone">
        <el-row class="">
            <el-col :span="16" class="row-left">
                <el-col :span="24" class="one bgc mb-2">
                    <div class="new">
                        <span>学习无止境</span>
                        <span>Don't stop</span>
                    </div>
                </el-col>
                <el-col :span="24" class="two bgc" id="vue">
                    <div class="new">
                        <span>Vue入门基础</span>
                    </div>
                </el-col>
                <el-col :span="24" class="three bgc mb-2">
                    <div class="three-content">
                        <p>
                            <a href="https://cn.vuejs.org/">Vue中文文档</a>
                            写得很好，界面清爽，内容翔实。但文档毕竟不是教程，文档一上来出现了大量的新概念，
                            对于新手而言，并不友好。个人还是比较喜欢类似于《JS高级程序设计》的风格，从浅入深，娓娓道来
                        </p>
                        <p>
                            于是，还是按照自己的思路，对Vue的知识体系从浅入深的开始学习，
                            并把学习记录总结成博客，也是希望能够帮助到同样入门Vue的朋友，
                            本文将详细介绍Vue入门基础
                        </p>
                        <h3 id="anchor1">概述</h3>
                        <p>
                            Vue.js（读音 /vjuː/，类似于 <strong>view</strong>） 
                            是一套构建用户界面的<strong>渐进式框架</strong>。
                            Vue 采用自底向上增量开发的设计，核心库只关注视图层，它不仅易于上手，
                            还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，
                            Vue 也完全能够为复杂的单页应用程序提供驱动
                        </p>
                        <p>注意：由于Vue使用getter/setter等ES5特性，所以兼容到IE9</p>
                        <p>
                            <img src="https://pic.xiaohuochai.site/blog/vue_base_base1.png" 
                            width="100%"
                            height="100%"
                            alt="vue_base_base1">
                        </p>
                        <p>  下面来解释下，何为渐进式框架，如上图所示　</p>
                        <p>  如果只使用Vue最基础的声明式渲染的功能，则完全可以把Vue当做一个模板引擎来使用</p>
                        <p>  如果想以组件化开发方式进行开发，则可以进一步使用Vue里面的组件系统</p>
                        <p>  如果要制作SPA(单页应用)，则使用Vue里面的客户端路由功能</p>
                        <p>  如果组件越来越多，需要共享一些数据，则可以使用Vue里的状态管理</p>
                        <p>  如果想在团队里执行统一的开发流程或规范，则使用构建工具</p>
                        <p>  所以，可以根据项目的复杂度来自主选择使用Vue里面的功能</p>
                        <p>&nbsp;</p>
                        <h3 id="anchor2">安装</h3>
                        <p>  Vue.js有三种获取方式</p>
                        <p>1、<a href="https://cn.vuejs.org/">官网</a>直接下载</p>
                        <p>  <a href="https://vuejs.org/js/vue.js">开发版本</a>：包含完整的警告和调试模式</p>
                        <p>  <a href="https://vuejs.org/js/vue.min.js">生产版本</a>：删除了警告，28.96kb min+gzip</p>
                        <p>2、CDN</p>
                        <p>  使用<a href="https://unpkg.com/vue">https://unpkg.com/vue</a>这个在线CDN</p>
                        <p>3、NPM</p>
                        <div>
                            <pre># 最新稳定版
                            $ npm install vue</pre>
                        </div>

                        <p>&nbsp;  获取Vue后，直接使用script标签引入即可使用</p>
                        <div>
                        <pre>&lt;script src="vue.js"&gt;&lt;/script&gt;    </pre>
                        </div>
                        <div>
                        <pre>&lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;</pre>
                        </div>

                        <p>&nbsp;</p>
                        <h3 id="anchor3">模板插值</h3>
                        <p>  
                            前面介绍过，对于Vue最简单的应用就是将其当作一个模板引擎，
                            也就是采用模板语法把数据渲染进 DOM。Vue使用双大括号语法来进行文本插值，
                            下面的message相当于一个变量或占位符，最终会表示为真正的文本内容
                        </p>
                        <!-- {% raw %} -->
                        <pre>
                            <code>
                                &lt;div id="app"&gt;{{ message }}&lt;/div&gt;
                            </code>
                        </pre>
                        <!-- {% endraw %} -->
                        <p>&nbsp;</p>
                        <h3 id="anchor4">构造器</h3>
                        <p>  
                            每个Vue.js应用都是通过构造函数&nbsp;<code>Vue</code>&nbsp;
                            创建一个&nbsp;Vue 的根实例启动的，经常使用&nbsp;<code>vm</code>&nbsp;(ViewModel 的简称) 
                            这个变量名表示Vue实例
                        </p>
                        <div>
                            <pre>var vm = new Vue({// 选项})</pre>
                        </div>

                        <p>在实例化Vue时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项</p>
                        <div>
                            <pre>
                                var vm = new Vue({
                                    el: '#app',
                                    data: {
                                        message: 'Hello Vue!'
                                    }
                                })
                            </pre>
                        </div>
                        <p>上面为Vue()构造函数传入了一个对象，对象中包括el和data这两个参数</p>
                        <p>【el】</p>
                        <p>参数el，是element的缩写，用于提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标</p>
                        <p>参数值有两种类型，包括string | HTMLElement</p>
                        <p>上例中， el : "#app"表示挂载目标为id为"app"的元素，也可以写为 el : document.getElementById('app')</p>
                        <p>【data】</p>
                        <p>参数data表示Vue实例的数据对象</p>
                        <p>上例中，data: {&nbsp; message: 'Hello Vue!'&nbsp;} 表示变量message所代表的真实值为"Hello Vue!"</p>
                        <p>&nbsp;</p>
                        <h3 id="anchor5">简单实例</h3>
                        <p>下面将Vue的模板插值和构造器结合起来，制作一个简单实例</p>
                        <!-- {% raw %} -->
                        <pre>
                            <code>
                                &lt;!DOCTYPE html&gt;
                                &lt;html lang="en"&gt;
                                &lt;head&gt;
                                    &lt;meta charset="UTF-8"&gt;
                                    &lt;title&gt;Document&lt;/title&gt;
                                &lt;/head&gt;
                                &lt;body&gt;
                                &lt;div id="app"&gt;
                                {{ message }}
                                &lt;/div&gt;
                                &lt;script src="vue.js"&gt;&lt;/script&gt;    
                                &lt;script&gt;
                                var vm = new Vue({
                                el: '#app',
                                    data: {
                                        message: 'Hello Vue!'
                                    }
                                })
                                &lt;/script&gt;
                                &lt;/body&gt;
                                &lt;/html&gt;
                            </code>
                        </pre>
                        <p>得到如下所示的结果</p>
                        <p>
                            <img src="https://pic.xiaohuochai.site/blog/vue_base_base2.png" 
                            width="100%"
                            height="100%"
                            alt="vue_base_base2"
                            >
                        </p>
                        <p>【数据绑定】</p>
                        <p>  
                            看起来上面的例子跟单单渲染一个字符串模板非常类似，
                            但是Vue在背后做了大量工作。现在数据和 DOM 已经被绑定在一起，
                            所有的元素都是响应式的
                        </p>
                        <p>  在控制台中修改app.message的值，可看到DOM元素相应的更新</p>
                        <p>
                            <img src="https://pic.xiaohuochai.site/blog/vue_base_base3.gif" 
                            width="100%"
                            height="100%"
                            alt="vue_base_base3">
                        </p>
                        <p>&nbsp;</p>
                        <h2>最后</h2>
                        <p>  
                            当然，Vue学习的前提是要掌握
                            <a href="http://www.cnblogs.com/xiaohuochai/p/7233392.html">ES6</a>、
                            <a href="http://www.cnblogs.com/xiaohuochai/p/6940560.html">nodejs</a>以及
                            <a href="http://www.cnblogs.com/xiaohuochai/p/6666415.html#anchor2">webpack</a>
                        </p>
                        <p>欢迎交流</p>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="8" class="row-right">
                <el-col :span="24" class="one bgc">
                    <div class="new">
                        <span>知识总结</span>
                        <span>Knowledge summary</span>
                    </div>
                </el-col>
                <el-col :span="24" class="one mt-2 bgc">
                    <div>
                        <p>目录</p>
                    </div>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message:''
        }
    },
}
</script>
<style lang="less" scoped>
    @import url('../../../assets/css/index.less');
    .row-left{
        padding-right: 15px;
    }
    .row-right{
        padding-left: 15px;
    }
    a{
        color: #999;
    }
    a:hover{
        color: tomato;
    }
    .three-content{
        padding: 20px 20px;
    }
</style>