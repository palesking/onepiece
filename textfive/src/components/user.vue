<template>
    <div class="basic_user publicone">
        <div class="user-content">
             <Row>
                <Col span="24">
                    <Card dis-hover :bordered=bordered>
                        <table class="layui-hide" id="test" lay-filter="test"></table>
                        <script type="text/html" id="toolbarDemo">
                            <div class="layui-btn-container">
                                <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中行数据</button>
                                <button class="layui-btn layui-btn-sm" lay-event="getCheckLength">获取选中数目</button>
                                <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button>
                            </div>
                        </script>
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
                    "id": "10001",
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
                    "id": "10002"
                    ,"username": "李白"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "12"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                    ,"LAY_CHECKED": true
                }, 
                {
                    "id": "10003"
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
                    "id": "10004"
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "666"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                }, 
                {
                    "id": "10005"
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "86"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                }, 
                {
                    "id": "10006"
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
                    "id": "10007"
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
                    ,"sign": "人生恰似一场修行"
                    ,"experience": "16"
                    ,"ip": "192.168.0.8"
                    ,"logins": "106"
                    ,"joinTime": "2016-10-14"
                }, 
                {
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
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
                    "id": "10008"
                    ,"username": "贤心"
                    ,"email": "xianxin@layui.com"
                    ,"sex": "男"
                    ,"city": "浙江杭州"
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
                {field: 'sign', title: '签名'},
                {field: 'sex', title: '性别'},
                {field: 'city', title: '城市'},
                {field: 'experience', title: '积分', sort: true},
                {fixed: 'right', title:'操作', toolbar: '#barDemo'},
                {field:'sex', title:'性别', templet: '#switchTpl', unresize: true},
                {field:'lock', title:'是否锁定', templet: '#checkboxTpl', unresize: true}
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
        
        layui.use('table', ()=>{
            var table = layui.table;
            var form = layui.form;
            //展示已知数据
            table.render({
                elem: '#test',
                toolbar: '#toolbarDemo', //开启头部工具栏，并为其绑定左侧模板
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
                //,limits: [5, 7, 10]
                //,limit: 5 //每页默认显示的数量
                done: function(){
                    var $ = layui.$
                    this.rowDrop()
                    this.columnDrop()
                    $('table').css('width', '100%');
                }.bind(this)
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
    .basic_user{
        position: relative;
        top: 40px;
        transition: all 0.2s linear;
        padding-bottom: 100px;
    }
</style>