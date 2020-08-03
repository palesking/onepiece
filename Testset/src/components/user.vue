<template>
    <div class="user">
        <h1>测试文件</h1>
        <div class="user-content">
             <Row>
                <Col span="24">
                    <Card dis-hover :bordered=bordered style="padding:0 200px 200px 200px;">
                        <table class="layui-hide" id="test" lay-filter="test"></table>
                        <!-- <script type="text/html" id="toolbarDemo">
                            <div class="layui-btn-container">
                                <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中行数据</button>
                                <button class="layui-btn layui-btn-sm" lay-event="getCheckLength">获取选中数目</button>
                                <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button>
                            </div>
                        </script> -->
                        <script type="text/html" id="barDemo">
                            <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                            <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
                        </script>
                        <script type="text/html" id="switchTpl">
                            <input type="checkbox" name="sex" lay-skin="switch" lay-text="女|男" lay-filter="sexDemo" >
                        </script>
                        
                        <script type="text/html" id="checkboxTpl">
                            <input type="checkbox" name="lock" title="锁定" lay-filter="lockDemo">
                        </script>
                        <script type="text/html" id="moveBar">
                            <a class="layui-btn layui-btn-xs" lay-event="moveUp"><i class="layui-icon layui-icon-up"></i>上移</a>
                            <a class="layui-btn layui-btn-warm layui-btn-xs" lay-event="moveDown"><i class="layui-icon layui-icon-down"></i>下移</a>
                        </script>
                        <script type="text/html" id="toolbarDemo">
                            <div class="layui-btn-container layui-inline">
                                <span class="layui-btn layui-btn-sm" lay-event="getChecked">获得选中的数据</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="getCheckedWithCache">获得选中的数据带缓存数据(跨页)</span>
                                <span class="layui-btn layui-btn-sm" lay-event="deleteSome">批量删除</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="jump" data-page="1">第1页</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="jump" data-page="2">第2页</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="reload" data-url="data_none">无数据</span>
                                <span class="layui-btn layui-btn-sm layui-btn-primary" lay-event="reload">重载</span>
                                <span class="layui-btn layui-btn-sm layui-btn-primary" lay-event="setDisabled">设置10003,10004,10010不可选</span>
                                <span class="layui-btn layui-btn-sm layui-btn-primary" lay-event="setDisabledNull">取消不可选</span>
                                <span class="layui-btn layui-btn-sm" lay-event="openSelect">弹出选择</span>
                                <span class="layui-btn layui-btn-sm" lay-event="openIframeSelect">弹出iframe选择</span>
                                <span class="layui-btn layui-btn-sm" lay-event="addTempData">添加临时数据</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="getTempData">获得临时数据</span>
                                <span class="layui-btn layui-btn-sm layui-btn-danger" lay-event="cleanTempData">清空临时数据</span>

                                <span class="layui-btn layui-btn-sm layui-btn-primary" lay-event="ranksConversion">行列转换(初始实现)</span>
                                <span class="layui-btn layui-btn-sm layui-btn-primary" lay-event="ranksConversionPro">行列转换(封装)</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="testUpdate">积分清零</span>
                                <span class="layui-btn layui-btn-sm" lay-event="testUpdate10">女性积分加100</span>
                            </div>
                            <div class="layui-inline">
                                <span><span style="color: red;">※</span>url模式测试用的是json文件所以翻页请用这里按钮，不要用table的中的laypage组件，实际开发中不会有这个问题</span>
                            </div>
                        </script>
                    </Card>
                </Col>
            </Row>    
        </div>
    </div>
</template>
<script>
import Sortable from 'sortablejs';
export default {
    name:'basic_user',
    data(){
        return{
            bordered:false,
            alldata: [
                {
                    "id": 10001,
                    "username": "杜甫",
                    "email": "xianxin@layui.com",
                    "sex": "男",
                    "city": "浙江杭州",
                    "sign": "人生恰似一场修行",
                    "experience": "116",
                    "ip": "192.168.0.8",
                    "logins": "108",
                    "joinTime": "2016-10-14"
                }, 
                {
                    "id": 10002
                    ,"username": "李白"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "是撒发生"
                    ,"experience": "12"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                    ,"LAY_CHECKED": true
                }, 
                {
                    "id": 10003
                    ,"username": "王勃"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "65"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                }, 
                {
                    "id": 10004
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "女"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "666"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                }, 
                {
                    "id": 10005
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "女"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "86"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                }, 
                {
                    "id": 10006
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "12"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                }, 
                {
                    "id": 10007
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "女"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "16"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                }, 
                {
                    "id": 10008
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10009
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "女"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10010
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10011
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "女"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10012
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10013
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "女"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10014
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10015
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10016
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "女"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10017
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10018
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10019
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10020
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10021
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10022
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "女"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10023
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "上海"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                },
                {
                    "id": 10024
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "北京"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "106"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                }
            ],
            allcols:[[ 
                //标题栏
                {type: 'checkbox'},
                {field: 'id', title: 'ID', sort: true},
                {field: 'username', title: '用户名'},
                {field: 'email', title: '邮箱'},
                {field: 'sign', title: '签名',filter: true},
                {field: 'sex', title: '性别',filter: true},
                {field: 'city', title: '城市',filter: true},
                {field: 'experience', title: '积分', sort: true,totalRow: true},
                {fixed: 'right', title:'操作', toolbar: '#barDemo'},
                {field:'sex', title:'性别', templet: '#switchTpl', unresize: true},
                {field:'lock', title:'是否锁定', templet: '#checkboxTpl', unresize: true},
                {field:'tootar',title:'移动',toolbar: '#moveBar',align: 'center',type: 'toolbar'}
            ]],
        }
    },
    methods: {
        //行拖拽
        rowDrop() {
            const tbody = document.querySelector('.layui-table-body tbody')
            const _this = this
            Sortable.create(tbody, {
                onEnd({ newIndex, oldIndex }) {
                const currRow = _this.alldata.splice(oldIndex, 1)[0]
                _this.alldata.splice(newIndex, 0, currRow)
                }
            })
        },
        //列拖拽
        columnDrop() {
            const wrapperTr = document.querySelector('.layui-table-header tr')
            this.sortable = Sortable.create(wrapperTr, {
                animation: 180,
                delay: 0,
                onEnd: evt => {
                    const oldItem = this.allcols[evt.oldIndex]
                    this.allcols.splice(evt.oldIndex, 1)
                    this.allcols.splice(evt.newIndex, 0, oldItem)
                }
            })
        }
    },
    mounted() {
        layui.config({base:'layui/tablePlug/'}).use(['table','tablePlug'], ()=>{
            var table = layui.table;
            var form = layui.form;
            var tablePlug = layui.tablePlug,
                formSelects = layui.formSelects; //多选下拉插件

            // 第三个参数，主键名称，如果表格的主键名不是'id'那么这个参数必须制定，以为一般来说init会在render之前执行， 
            // 所以如果不指定，他找不到表格配置信息，也就不知道里面配合的主键名称是什么，导致变成默认的'id'后面render出来就没有效果了
            tablePlug.tableCheck.init('test',[{"id": 10000,}, { "id": 10001}],'id');


            //展示已知数据
            table.render({
                elem: '#test',
                toolbar: '#toolbarDemo', //开启头部工具栏，并为其绑定左侧模板
                even: true,
                checkStatus: {},
                headers: {
                    pageCompute: true
                },
                //开启合计
                totalRow: true,
                //反转
                // reversal: true,
                defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
                    title: '提示',
                    layEvent: 'LAYTABLE_TIPS',
                    icon: 'layui-icon-tips'
                }],
                cols: this.allcols,
                data: this.alldata,
                // skin: 'line', //表格风格
                cellMinWidth: 80,
                even: true,
                page: true, //是否显示分页
                colFilterRecord: true, //表格筛选记忆
                smartReloadModel: true, //表格智能重载
                //,limits: [5, 7, 10]
                //,limit: 5 //每页默认显示的数量
                done: function(){
                    var $ = layui.$
                    this.rowDrop()
                    this.columnDrop()
                    $('table').css('width', '100%');
                }.bind(this),
                //表格的主键
                primaryKey: 'id',
                //头部工具栏固定
                checkStatus: {
                    // 原始已经选中的记录的主键值集合
                    default: [10001, 10002, 10007, 10009, 10013, 10015]
                },
                checkDisabled: {
                    enabled: true,
                    data: [10000, 10001, 10002, 10003, 10004, 10005, 10009]
                },
                parseData: function (ret) {
                    return {
                        code: ret.code,
                        msg: ret.msg,
                        count: ret.data ? (ret.data.total || 0) : 0,
                        data: ret.data ? (ret.data.list || []) : []
                    }
                }
            });
            //头工具栏事件
            table.on('toolbar(test)', function(obj){
                var checkStatus = table.checkStatus(obj.config.id);
                switch(obj.event){
                    case 'getCheckData':
                        var data = checkStatus.data;
                        layer.alert(JSON.stringify(data));
                        break;
                    case 'getCheckLength':
                        var data = checkStatus.data;
                        layer.msg('选中了：'+ data.length + ' 个');
                        break;
                    case 'isAll':
                        layer.msg(checkStatus.isAll ? '全选': '未全选');
                        break;
                    
                    //自定义头工具栏右侧图标 - 提示
                    case 'LAYTABLE_TIPS':
                        layer.alert('这是工具栏右侧自定义的一个图标按钮');
                        break;
                };
            });
            
            //监听行工具事件
            table.on('tool(test)', function(obj){
                var data = obj.data;
                if(obj.event === 'del'){
                    layer.confirm('真的删除行么', function(index){
                        obj.del();
                        layer.close(index);
                    });
                } else if(obj.event === 'edit'){
                    layer.prompt({
                        value: data.email
                    }, function(value, index){
                        obj.update({
                            email: value
                        });
                        layer.close(index);
                    });
                }
            });
            //监听性别操作
            form.on('switch(sexDemo)', function(obj){
                layer.tips(this.value + ' ' + this.name + '：'+ obj.elem.checked, obj.othis);
            });
            
            //监听锁定操作
            form.on('checkbox(lockDemo)', function(obj){
                layer.tips(this.value + ' ' + this.name + '：'+ obj.elem.checked, obj.othis);
            });
        });
        
    },
}
</script>
<style lang="less" scoped>
    .user{
        position: relative;
        top: 40px;
        transition: all 0.2s linear;
        padding-bottom: 100px;
        .user-content{
            // width: 1200px;
            // margin: auto;
        }
    }
</style>