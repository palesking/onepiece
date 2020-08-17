import React ,{Component} from 'react'
import '../index.css'

export default class Bg extends Component{
    render(){
        return (
            <div>
                <canvas></canvas>
            </div>
            )
    }
}
    var c = document.querySelector('canvas');
        var cxt = c.getContext('2d');
        resize();
        window.onresize = resize;

        function resize() {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
        }
        // max 鼠标与粒子之间的连线距离
        var mouse = {
            x:null,
            y:null,
            max:20000
        }
        //console.log( Math.sqrt(20000) )

        window.addEventListener('mousemove',function (e) {
            e = e || event;
            mouse.x = e.clientX;
            mouse.y = e.clientY;

        })
        window.onmouseout = function () {
            mouse.x = null;
            mouse.y = null;
        }

        // 添加粒子
        // x y 粒子坐标 xv yv 粒子加速度  max 粒子与粒子之间连线的距离
        var dots = [];

        for ( var i=0;i<300;i++ ){
            var x = Math.random()*c.width;
            var y = Math.random()*c.height;
            var xv = Math.random()*2-1;
            var yv = Math.random()*2-1;
            dots.push({
                x:x,
                y:y,
                xv:xv,
                yv:yv,
                max:6000
            });
        }
        //console.log(dots);
        setTimeout(function () {
            create();
        },300)
        function create() {

            cxt.clearRect(0,0,c.width,c.height);

            var ndots = [mouse].concat(dots); //

            dots.forEach(function (dot) {
                //console.log(dot);
                // 粒子位移 累加
                //console.log(dot);
                dot.x += dot.xv;
                dot.y += dot.yv;
                // 超出边界
                dot.xv *= (dot.x > c.width|| dot.x<0 )?-1:1;
                dot.yv *= (dot.y > c.height || dot.y<0)?-1:1;
                cxt.fillRect(dot.x-0.5,dot.y-0.5,1,1);
                // 循环对比 粒子间的距离
                for( var i=0;i<ndots.length;i++ ){
                    var now = ndots[i];
                    if( dot === now || now.x === null || now.y === null ){
                        continue;
                    }
                    var disX = dot.x - now.x;   // 其中某一个 和300个粒子循环进行对比
                    var disY = dot.y - now.y;
                    // 两点之间的距离
                    var dis = disX*disX + disY*disY;
                    // 粒子之间 判断距离
                    var scale;
                    if( dis < now.max ){  // 两点间距离  《 77
                        // 如果是鼠标  就让粒子向鼠标 的位置移动
                        if( now === mouse && dis > now.max/2 ){
                            dot.x -= disX * 0.03;
                            dot.y -= disY * 0.03;
                        }
                        scale = (now.max - dis) / now.max;
                        cxt.beginPath();
                        cxt.lineWidth = scale / 2;
                        //cxt.strokeStyle = 'rgba(255,0,0,'+scale+0.2+')';
                        var color = cxt.createLinearGradient(dot.x,dot.y,now.x,now.y)
                            color.addColorStop(0,'rgba(255,255,255,0.8)');
                            color.addColorStop(0.3,'rgba(255,255,255,0.05)');
                            color.addColorStop(0.6,'rgba(255,255,255,0.05)');
                            color.addColorStop(1,'rgba(255,255,255,0.8)');
                            cxt.strokeStyle = color;
                        cxt.moveTo(dot.x,dot.y);
                        cxt.lineTo(now.x,now.y);
                        cxt.stroke();
                    }
                }
                // 将计算过的粒子从数组中删除
                ndots.splice(ndots.indexOf(dot),1);
            })

            requestAnimationFrame(create);
        }

        //console.log( Math.sqrt(6000) )