window.onload = function(){
    //自执行函数,初始化所有的li
    (function(){
        //获取元素,用动态get获取
        var len = 5 * 5 * 5 //定义生成多少li
        var aul = document.getElementById("list").children[0];
        var ali = aul.children;
        //console.log(aul)
        //console.log(ali)
        
        //for循环创建li
        (function(){
            for(var i = 0;i<len;i++){
                var oli = document.createElement("li")
                
                //自定义属性记录li的索引值
                oli.index = i
                //根据索引记录坐标位置
                oli.x = i % 5
                oli.y = Math.floor(i % 25 / 5)
                oli.z = 4 - Math.floor(i / 25)
                
                //获取数据
                var data = flyData[i] || flyData[0]
                oli.innerHTML = `
                    <b class="cover"></b>
                    <p class="title">${data.title}</p>
                    <p class="author">${data.author}</p>
                    <p class="time">${data.time}</p>   
                `

                //随机确定li的位置
                var tx = Math.random()*6000-3000;
                var ty = Math.random()*6000-3000;
                var tz = Math.random()*6000-3000;

                oli.style.transform = `translate3d(${tx}px,${ty}px,${tz}px)`
                aul.appendChild(oli)
            }
            setTimeout(Grid,20)
            //console.log(ali)
        })();
        //鼠标左右旋转事件
        (function(){
            //保存信号量
            var rox = 0,
            roy = 0,
            roz = -2000;
            //清楚默认选中文字事件
            document.onselectstart = function(){
                return false
            }
            //鼠标按下
            document.onmousedown =function(ev){
                ev = ev || window.event
                //定义初始值
                // sx = ev.clientX,
                // sy = ev.clientY,
                //定义插值
                var lastx = ev.clientX,
                lasty = ev.clientY,
                //定义最后的值
                x_ = 0,y_ = 0;
                //鼠标移动

                //鼠标有没有移动
                var ifmove = false
                var iftime = new Date()//鼠标按下的事件戳
                if(ev.target.nodeName === "B"){
                    var thisLi = ev.target
                }
                this.onmousemove = function(ev){
                    ev = ev || window.event;
                    x_ = ev.clientX - lastx;
                    y_ = ev.clientY - lasty;


                    ifmove = true
                    //根据位移确定旋转度数
                    rox += x_ * 0.1  
                    roy -= y_ * 0.1
                    aul.style.transform = `translateZ(${roz}px) rotateX(${roy}deg) rotateY(${rox}deg)`;
                    lastx = ev.clientX;
                    lasty = ev.clientY;
                }
                //鼠标松开
                this.onmouseup = function(ev){
                    //判断鼠标点击是是否发生弹窗
                    if(ifmove && (ev.target.nodeName === thisLi) || ((new Date() -iftime)>500)){
                        //thisLi.goudan = true
                        if(ev.target.nodeName === "B"){
                            thisLi.goudan = true
                        }
                    }
                    this.onmousemove = null
                    //缓冲
                    function m(){
                        x_*=0.9
                        y_*=0.9
                        rox += x_ * 0.1  
                        roy -= y_ * 0.1
                        aul.style.transform = `translateZ(${roz}px) rotateX(${roy}deg) rotateY(${rox}deg)`;
                        if(Math.abs(x_)< 0.1 && Math.abs(y_) < 0.1) return
                        
                        requestAnimationFrame(m) 
                    }
                    requestAnimationFrame(m)
                }
            }


            //滚轮改变Z轴变化
            !function(fn){
                if(document.onmousewheel === undefined){
                    //火狐浏览器
                    document.addEventListener("DOMMouseScroll",function(e){
                        var d = -e.detail / 3;
                        fn(d) 
                    },false)
                }else{
                    //主流浏览器
                    document.onmousewheel = function(e){
                        var d = e.wheelDelta / 120;
                        fn(d)
                    }
                }
            }(function(d){
                roz += d * 100;
                aul.style.transform = `translateZ(${roz}px) rotateX(${roy}deg) rotateY(${rox}deg)`
            })

        })();
        //alert弹窗
        (function(){
            var aalert = document.getElementById("alert");
            //console.log(aalert);
            var atitle = aalert.getElementsByClassName("title")[0].getElementsByTagName("span")[0];
            var aimg = aalert.getElementsByClassName("img")[0].getElementsByTagName("img")[0];
            var aauthor = aalert.getElementsByClassName("author")[0].getElementsByTagName("span")[0];
            var ainfo = aalert.getElementsByClassName("info")[0].getElementsByTagName("span")[0];
            //console.log(atitle,aimg,aauthor,ainfo);
            //点击弹窗需要获取的元素
            var aall = document.getElementById("all")
            //console.log(aall)
            var aback = document.getElementById("back")
            //console.log(aback)
            var aframe = document.getElementById("frame")
            //console.log(aframe)
            //通过事件委托绑定点击事件
            aul.onclick = function(ev){
                ev = ev || window.event
                //console.log(1)
                var target = ev.target
                if(target.nodeName === "B"){
                    if(target.goudan){
                        target.goudan = false;
                    }else{
                        //console.log(2)
                        if(aalert.style.display === "block"){
                            //隐藏
                            hide()
                        }else{
                            //在显示之前改变弹窗内容
                            var index = target.parentNode.index;
                            var data = flyData[index] || flyData[0];
                            aalert.src = data.src
                            //填充数据
                            atitle.innerHTML = `课题:${data.title}`
                            aimg.src = `./images/index.jpg`
                            aauthor.innerHTML = `主角:${data.author}`
                            ainfo.innerHTML = `${data.desc}`
                            //显示
                            show()
                        }
                    }
                }
                //阻止冒泡
                ev.cancelBubble = true
            }
            //点击任何位置隐藏
            document.onclick = function(){
                hide()
            }
            //点击弹窗显示右侧区域
            aalert.onclick = function(ev){
                ev.cancelBubble = true;
                //console.log(ev.target)
                //ev.preventDefault()
                aall.className = "left"
                aframe.src = `./src/${this.src}/index.html`
            }
            //返回
            aback.onclick = function(){
                aall.className = ""
            }
            //隐藏函数
            function hide(){
                //节流
                //双重判断全局隐藏问题
                if(aalert.style.display === "block" && !aalert.timer){
                    //if(aalert.timer) return
                    //
                    aalert.timer = true
                    //隐藏的内容
                    //初始值
                    aalert.style.display = "block"
                    aalert.style.transform = `rotate(0deg) scale(1)`
                    aalert.style.opacity = `1`
                    //动画过渡
                    var time = 300;
                    var sTime = new Date()

                    function m(){
                        //var sEnd = new Date()
                        //var timer = new Date() - sTime
                        var prop = (new Date() - sTime)/time
                        //判断终止
                        if(prop >=1 ){
                            //超出拉回
                            prop = 1
                            aalert.style.display = "none"
                            //
                            aalert.timer = false
                        }else{
                            requestAnimationFrame(m)
                        }
                        aalert.style.transform = `rotateY(${180*prop}deg) scale(${1-prop})`
                        aalert.style.opacity = 1-prop
                    }
                    requestAnimationFrame(m)
                }
            }  
            //显示的函数
            function show(){
                //节流
                if(aalert.timer) return
                aalert.timer = true
                //显示的内容
                aalert.style.display = "block"
                aalert.style.transform = `rotate(0deg) scale(2)`
                aalert.style.opacity = `0`
                //动画过渡
                var time = 300;
                var sTime = new Date()

                function m(){
                    //var sEnd = new Date()
                    //var timer = new Date() - sTime
                    var prop = (new Date() - sTime)/time
                    //判断终止
                    if(prop >=1 ){
                        //超出拉回
                        prop = 1
                        aalert.timer = false
                    }else{
                        requestAnimationFrame(m)
                    }
                    aalert.style.transform = `rotate(0deg) scale(${2-prop})`
                    aalert.style.opacity = prop
                }
                requestAnimationFrame(m)
            }
        })();
        //右下角点击事件
        (function(){
            var abtn = document.getElementsByClassName("btn")[0].getElementsByTagName("li")
            //console.log(abtn)
            var arr = [table,sphere,helix,Grid]
            // abtn[0].onclick = table;
            // abtn[1].onclick = sphere;
            // abtn[2].onclick = helix;
            // abtn[3].onclick = Grid;
            // for(var i=0;i<arr.length;i++){
            //     abtn[i].onclick = arr[i];
            // }
            var abtnarr = [...abtn]
            abtnarr.forEach(function(abtn,index){
                abtn.onclick = arr[index]
            })
        })();
        //table
        function table(){
            if(table.arr){
                for(var i = 0;i<len;i++){
                    ali[i].style.transform = table.arr[i];
                }
            }else{
                table.arr = []
                var n = Math.ceil(len/18); //计算一共有多少行
                var midY = n/2 - 0.5;  //ul所在的行
                var midX = 18/2 - 0.5; //ul所在的列
                //每个li的水平垂直间距
                var disY = 210;
                var disX = 170;
                //开始18个的坐标
                var arr = [
                    {x:0,y:0},
                    {x:17,y:0},
                    {x:1,y:1},
                    {x:0,y:1},
                    {x:12,y:1},
                    {x:13,y:1},
                    {x:14,y:1},
                    {x:15,y:1},
                    {x:16,y:1},
                    {x:17,y:1},
                    {x:0,y:2},
                    {x:1,y:2},
                    {x:12,y:2},
                    {x:13,y:2},
                    {x:14,y:2},
                    {x:15,y:2},
                    {x:16,y:2},
                    {x:17,y:2}
                ];
                for(var i = 0;i<len;i++){
                    var x,y;
                    if(i<18){
                        x = arr[i].x
                        y = arr[i].y
                    }else{
                        x = i%18
                        y = Math.floor(i/18) + 2
                    }
                    var val = `translate3d(${(x - midX) * disX}px,${(y - midY) * disY}px,0px)`
                    table.arr[i] = val;
                    ali[i].style.transform = val;
                }
            }
        }
        //sphere圆
        function sphere(){
            if(sphere.arr){
                for(var i = 0;i<len;i++){
                    ali[i].style.transform = sphere.arr[i];
                }
            }else{
                sphere.arr = [];
                //确定每个球面有多少li
                var arr = [1,3,7,9,11,14,21,20,12,10,9,7,1];
                var arrLen = arr.length;//一共有多少层
                var xDeg = 180 / (arrLen-1); //li在x轴的旋转度数
                for(var i = 0;i<len;i++){
                    //定义li保存当前li在第几层,以及当前层的第几个li
                    var numc = 0;
                    var numg = 0;
                    var arrnum = 0;
                    for(var j=0;j<arrLen;j++){
                        arrnum += arr[j]
                        if(i<arrnum){
                            numc = j; //计算当前li的层
                            numg = i-(arrnum - arr[j]);
                            break;
                        }
                    }
                    var yDeg = 360 / arr[numc]
                    var val = `rotateY(${(numg +1.3) * yDeg}deg) rotateX(${90 - numc * xDeg}deg) translateZ(800px)`
                    sphere.arr[i] = val;
                    ali[i].style.transform = val;
                }
            }
        }
        //helix螺旋
        function helix(){
            if(helix.arr){
                for(var i=0;i<len;i++){
                    ali[i].style.transform = helix.arr[i];
                }
            }else{
                helix.arr = [];
                var h = 4; //螺旋层数
                var ty = 7; //每个li上下错位的像素
                var num = Math.round(len / h);
                var deg = 360 / num //计算每一个li的旋转度数
                var mid = len /2 - 0.5; //确定ul的位置
                for(var i = 0;i<len;i++){
                    var val = `rotateY(${i*deg}deg) translateY(${ty*(i-mid)}px) translateZ(800px)`;
                    helix.arr[i] = val;
                    ali[i].style.transform = val;
                }
            }
            
        }
        //Grid列表函数
        function Grid(){
            if(Grid.arr){
                for(var i = 0;i<len;i++){
                    ali[i].style.transform = Grid.arr[i];
                }
            }else{
                Grid.arr = []
                //确定每个li之间的间隔
            var dix = 350;
            var diy = 350;
            var diz = 800;
            //计算li的偏移量
            for(var i = 0;i<len;i++){
                var oli = ali[i];
                var x = (oli.x - 2) * dix
                var y = (oli.y - 2) * diy
                var z = (oli.z - 2) * diz
                //渲染到页面中
                var val = `translate3d(${x}px,${y}px,${z}px)`;
                Grid.arr[i] = val;
                oli.style.transform = val;

            }
            }
            
        }
    })()

}
    