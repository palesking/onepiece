<template>
    <div class="user">
        <h1>测试文件</h1>
        <div class="user-content">
             <Row>
                <Col span="24">
                    <Card dis-hover :bordered=bordered style="padding:0 100px 100px 100px;">
                        <table class="layui-hide" id="test" lay-filter="test"></table>
                        <!-- <script type="text/html" id="barDemo">
                            <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                            <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
                        </script> -->
                        <script type="text/html" id="switchTpl">
                            <input type="checkbox" name="sex" lay-skin="switch" lay-text="女|男" lay-filter="sexDemo" >
                        </script>
                        <script type="text/html" id="barDemo">
                            <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">查看</a>
                            <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                            <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
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
                                <span class="layui-btn layui-btn-sm" lay-event="getCheckData">获得选中的数据</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="getCheckedWithCache">获得选中的数据带缓存数据(跨页)</span>
                                <span class="layui-btn layui-btn-sm" lay-event="deleteSome">批量删除</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="jump" data-page="1">第1页</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="jump" data-page="2">第2页</span>
                                <span class="layui-btn layui-btn-sm layui-btn-warm" lay-event="reload" data-data="data_none">无数据</span>
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
                {field: 'id', title: 'ID', sort: true,width:80,align:'center'},
                {field: 'username', title: '用户名',width:80,align:'center',edit: true},
                {field: 'email', title: '邮箱',align:'center'},
                {field: 'sign', title: '签名',filter: true,align:'center'},
                {field: 'sex', title: '性别',filter: true,width:60,align:'center'},
                {field: 'city', title: '城市',filter: true,align:'center'},
                {field: 'experience', title: '积分', sort: true,width:80,totalRow: true,align:'center'},
                {fixed: 'right', title:'操作', toolbar: '#barDemo',align:'center'},
                {field:'sex', title:'性别', templet: '#switchTpl',width:80, unresize: true,align:'center'},
                {field:'lock', title:'是否锁定', templet: '#checkboxTpl', unresize: true,align:'center'},
                {field:'tootar',title:'移动',toolbar: '#moveBar',align: 'center',type: 'toolbar'},
                {fixed: 'right',type: 'toolbar',field: 'toolbar_common',title: '操作',align: 'center',toolbar: '#barDemo'}
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
        layui.config({base:'layui/tablePlug/'})
        // .extend({formSelects: 'formSelects-v4.js', renderFormSelectsIn: 'renderFormSelectsIn.js'})
        // .define(['tablePlug', 'laydate', 'renderFormSelectsIn','formSelects'])
        .use(['table','tablePlug','laydate'], ()=>{
            var table = layui.table,
                form = layui.form,
                $ = layui.$,
                tablePlug = layui.tablePlug,
                laydate = layui.laydate,
                //多选下拉插件
                formSelects = layui.formSelects;
                // renderFormSelectsIn = layui.renderFormSelectsIn;
            // 第三个参数，主键名称，如果表格的主键名不是'id'那么这个参数必须制定，以为一般来说init会在render之前执行， 
            // 所以如果不指定，他找不到表格配置信息，也就不知道里面配合的主键名称是什么，导致变成默认的'id'后面render出来就没有效果了
            tablePlug.tableCheck.init('test',[{"id": 10000,}, { "id": 10001}],'id');
            var laytpl = layui.laytpl;
            var tplTemp = '你好！ <%d.name%> v<%layui.v%> ';
            // 处理操作列
            var fn1 = function (field) {
                return function (data) {
                    // return data[field];
                    var value = data[field];
                    return [
                        '<select name="city" lay-filter="city_select" lay-search="true" value="' + value + '">',
                        '<option value="" >请选择或搜索</option>',
                        '<option value="北京" ' + (value === '北京' ? 'selected' : '') + '>北京</option>',
                        '<option value="天津" ' + (value === '天津' ? 'selected' : '') + '>天津</option>',
                        '<option value="上海" ' + (value === '上海' ? 'selected' : '') + '>上海</option>',
                        '<option value="广州" ' + (value === '广州' ? 'selected' : '') + '>广州</option>',
                        '<option value="深圳" ' + (value === '深圳' ? 'selected' : '') + '>深圳</option>',
                        '<option value="佛山" ' + (value === '佛山' ? 'selected' : '') + '>佛山</option>',
                        '</select>'
                    ].join('');
                };
            };

            // var layuiTpl = function (template, data, callback, open, close) {
            //     laytpl.config({
            //         open: open || '{{',
            //         close: close || '}}'
            //     });
            //     var htmlTemp = laytpl(template).render(data, callback);
            //     laytpl.config({
            //         open: '{{',
            //         close: '}}'
            //     });
            //     return htmlTemp;
            // };
            // layer.open({
            //     type: 1,
            //     skin: 'layer-top',
            //     area: '100%',
            //     offset: 't',
            //     time: 3000,
            //     anim: 5,
            //     shade: 0,
            //     title: false,
            //     closeBtn: false,
            //     content: layuiTpl(tplTemp, {name: 'Layui'}, null, '<%', '%>'),
            //     success: function (layero, index) {
            //     layero.find('.layui-layer-content').append('<i class="layui-icon layui-icon-close" onclick="layer.close(' + index + ')" style="float: right;cursor: pointer;"></i>')
            //     },
            //     resize: false

            // });

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
                var that = this;
                var config = obj.config;
                var btnElem = $(that);
                var checkStatus = table.checkStatus(obj.config.id);
                var tableId = config.id;
                var tableView = config.elem.next();
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
                    case 'jump':
                        var pageCurr = btnElem.data('page');
                        table.reload(config.id, { page: {curr: pageCurr}} );
                    break;
                    case 'deleteSome':
                        // 获得当前选中的，不管它的状态是什么？只要是选中的都会获得
                        var checkedIds;
                        if (config.checkStatus) {
                            // 开启了复选状态记忆
                            checkedIds = tablePlug.tableCheck.getChecked(tableId);
                        } else {
                            // 不开启
                            checkedIds = table.checkStatus(tableId).data;
                        }
                        checkedIds.length ? layer.confirm('您是否确定要删除选中的' + checkedIds.length + '条记录？', 
                            function (index, layero) {
                            // layer.alert('do something with: ' + JSON.stringify(checkedIds));
                                tablePlug.del(tableId, checkedIds);
                                layer.close(index);
                                layer.msg('删除成功！', {icon: 1});
                            }) : layer.msg('请先选中要删除的数据');
                    break;
                    case 'reload':
                        var options = config.page ? {page: {curr: 1}} : {};
                        var urlTemp = btnElem.data('data');
                        if (urlTemp) {
                            options.data = "";
                        }
                        var optionTemp = eval('(' + (btnElem.data('option') || '{}') + ')');
                        table.reload(config.id, $.extend(true, options, optionTemp));
                    break;
                    case 'setDisabled':
                        // tablePlug.tableCheck.disabled(config.id, [10003, 10004, 10010]);
                        // table.reload(tableId, {});
                        tablePlug.disabledCheck(tableId, [10003, 10004, 10010]);
                    break;
                    case 'setDisabledNull':
                        tablePlug.disabledCheck(tableId, false);
                    break;
                    case 'openSelect':
                        layer.open({
                            type: 1,
                            title: '测试下拉效果单页面',
                            area: ['300px', '160px'],
                            content: '<div class="layui-form" style="padding: 20px;"><select><option value="1">北京</option><option value="2">上海</option><option value="3">广州</option><option value="4">深圳</option></select></div>',
                            success: function (layero, index) {
                                form.render('select', null, layero.find('select'));
                            }
                        });
                    break;
                    case 'openIframeSelect':
                        window.dataSub = {city: 2};
                        layer.open({
                            type: 2,
                            title: '测试下拉效果iframe',
                            shade: false,
                            area: ['300px', '160px'],
                            content: 'testIframe.html?time=' + new Date().getTime(),
                            success: function (layero, index) {}
                        });
                    break;
                    case 'addTempData':
                        // table.addTemp(tableId, function (trElem) { // 不给默认数据默认就是{}
                        table.addTemp(tableId, {city: '广州', score: 100, experience: '', birthday: ''}, 
                        // 新增支持传一个默认数据
                            function (trElem) { 
                                // 进入回调的时候this是当前的表格的config
                                var that = this;
                                // 初始化laydate
                                layui.each(trElem.find('td[data-field="birthday"]'), 
                                function (index, tdElem) {
                                    tdElem.onclick = function (event) {
                                    layui.stope(event);
                                };
                                laydate.render({
                                    elem: tdElem.children[0],
                                    format: 'yyyy/MM/dd',
                                    done: function (value, date) {
                                        var trElem = $(this.elem[0]).closest('tr');
                                        table.cache[that.id][trElem.data('index')]['birthday'] = value;
                                    }
                                });
                            });
                            renderFormSelectsIn(trElem, {}, 'layuiTable');
                        });
                    break;
                    case 'getTempData':
                        layer.alert('临时数据:' + JSON.stringify(table.getTemp(tableId).data));
                    break;
                    case 'cleanTempData':
                        table.cleanTemp(tableId);
                        layer.msg('临时数据已删除');
                    break;
                    case 'ranksConversion':
                        // 表格行列转换(初步效果)
                        tableView.toggleClass('vertical');
                        var isVertical = tableView.hasClass('vertical');
                        var headerElem = tableView.find('.layui-table-box>.layui-table-header');
                        var totalElem = tableView.find('.layui-table-total');
                        totalElem.css({top: isVertical ? tableView.find('.layui-table-tool').outerHeight() - 1 + 'px' : 0});
                        tableView.find('.layui-table-main').css({marginLeft: isVertical ? headerElem.width() + 'px' : 0});
                        config.reversal = isVertical;
                        // 处理360急速模式下出现的异常问题
                        table.resize(tableId);
                    break;
                    case 'ranksConversionPro':
                        // 表格行列转换(封装调用)
                        tablePlug.reverseTable(tableId);
                    break;
                    case 'testUpdate':
                        layui.each(table.cache[tableId], function (index, data) {
                            data.experience = 0;
                        });
                        tablePlug.update(tableId, table.cache[tableId]); // 等效下面的写法
                        // tablePlug.update(tableId);
                    break;
                    case 'testUpdate10':
                        tablePlug.update(tableId, table.cache[tableId].filter(function (data) {
                            if (data.sex === '女') {
                                data.experience += 100;
                                return true;
                            }
                        }));
                    break;
                };
            });
            
            //监听行工具事件
            table.on('tool(test)', function (obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
                var that = this;
                var data = obj.data //获得当前行数据
                , layEvent = obj.event //获得 lay-event 对应的值
                , trCurr = obj.tr
                , tableId = trCurr.closest('.layui-table-view').attr('lay-id')
                , trIndex = trCurr.data('index');

                if (layEvent === 'detail') {
                    layer.msg('查看操作(' + data.id + ')');
                } else if (layEvent === 'del') {
                    layer.confirm('真的删除行么', function (index) {
                    // obj.del(); //删除对应行（tr）的DOM结构
                    //向服务端发送删除请求
                    tablePlug.del(tableId, trIndex);
                    layer.close(index);
                    layer.msg('删除成功！', {icon: 1});
                });
                } else if (layEvent === 'edit') {
                    // layer.msg('编辑操作(' + data.id + ')');
                    // tablePlug.update(tableId, trIndex, {username: '贤心'});
                    layer.open({
                        type: 1,
                        title: '修改信息',
                        area: ['600px', '480px'],
                        content: '<form class="layui-form" action="" lay-filter="example" style="margin: 10px;">\n' +
                            '  <div class="layui-form-item">\n' +
                            '    <label class="layui-form-label">姓名</label>\n' +
                            '    <div class="layui-input-block">\n' +
                            '      <input type="text" name="username" lay-verify="title" autocomplete="off" placeholder="请输入姓名" class="layui-input">\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div class="layui-form-item">\n' +
                            '    <label class="layui-form-label">城市</label>\n' +
                            '    <div class="layui-input-block">\n' +
                            '      <select name="city" lay-filter="city">\n' +
                            '        <option value=""></option>\n' +
                            '        <option value="北京">北京</option>\n' +
                            '        <option value="天津">天津</option>\n' +
                            '        <option value="上海">上海</option>\n' +
                            '        <option value="广州">广州</option>\n' +
                            '        <option value="深圳">深圳</option>\n' +
                            '        <option value="佛山">佛山</option>\n' +
                            '      </select>\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div class="layui-form-item">\n' +
                            '    <label class="layui-form-label">爱好</label>\n' +
                            '    <div class="layui-input-block">\n' +
                            '      <input type="checkbox" name="like[write]" title="写作">\n' +
                            '      <input type="checkbox" name="like[read]" title="阅读">\n' +
                            '      <input type="checkbox" name="like[daze]" title="发呆">\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div class="layui-form-item">\n' +
                            '    <label class="layui-form-label">是否会员</label>\n' +
                            '    <div class="layui-input-block">\n' +
                            '      <input type="checkbox" name="vip" lay-skin="switch" lay-text="是|否">\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div class="layui-form-item">\n' +
                            '    <label class="layui-form-label">性别</label>\n' +
                            '    <div class="layui-input-block">\n' +
                            '      <input type="radio" name="sex" value="男" title="男">\n' +
                            '      <input type="radio" name="sex" value="女" title="女">\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div class="layui-form-item layui-form-text">\n' +
                            '    <label class="layui-form-label">个人标签</label>\n' +
                            '    <div class="layui-input-block">\n' +
                            '      <select name="label" xm-select="label">\n' +
                            '        <option value="1">中二</option>\n' +
                            '        <option value="2">呆萌</option>\n' +
                            '        <option value="3">淡漠</option>\n' +
                            '        <option value="4">冷艳</option>\n' +
                            '        <option value="5">和蔼</option>\n' +
                            '        <option value="6">倔强</option>\n' +
                            '      </select>\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div class="layui-form-item layui-form-text">\n' +
                            '    <label class="layui-form-label">个性签名</label>\n' +
                            '    <div class="layui-input-block">\n' +
                            '      <textarea placeholder="请输入内容" class="layui-textarea" name="sign"></textarea>\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div class="layui-form-item layui-hide">\n' +
                            '    <div class="layui-input-block">\n' +
                            '      <button class="layui-btn" lay-submit="" lay-filter="demo1">立即提交</button>\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '</form>',
                        success: function (layero, index) {
                            var dataTemp = $.extend({}, data);
                            if (dataTemp.like) {
                                layui.each(dataTemp.like.split(','), function (likeIndex, like) {
                                    dataTemp['like[' + like + ']'] = "on"
                                });
                                delete dataTemp.like;
                            }
                            form.val('example', dataTemp);

                            // renderFormSelectsIn(layero, {}, 'layer');
                            dataTemp.label && formSelects.value('label', dataTemp.label.split(','));

                            form.on('submit(demo1)', function (data) {
                                var formElem = $(data.form);
                                layui.each(data.field, function (key, value) {
                                    // 针对例子的表单格式的简单处理
                                    if (key.indexOf('[') !== -1) {
                                        var keys = key.split(/[\[\]]/);
                                        data.field[keys[0]] = data.field[keys[0]] ? data.field[keys[0]] + ',' + keys[1] : keys[1];
                                        delete data.field[key];
                                    }
                                });
                                data.field.label = formSelects.value('label', 'valStr');
                                // 请求接口成功保存之后调用更新的方法
                                tablePlug.update(tableId, trIndex, data.field);
                                layer.close(formElem.closest('.layui-layer').attr('times'));
                                layer.msg('修改成功！', {icon: 1});
                                return false;
                            });
                        },
                        btn: ['确定', '取消'],
                        yes: function (index, layero) {
                            layero.find('[lay-submit][lay-filter="demo1"]').get(0).click();
                        }
                        })
                        } else if (layEvent === 'editField') {
                        // 编辑字段，先把原始的值保存起来，后面校验失败的时候如果要回滚可以用到，
                        var field = $(this).data('field');
                        if (!field) {
                        return;
                        }
                        if (!data[field] && data[field] !== 0) {
                        data[field] = '';
                        }

                        table._dataTemp = table._dataTemp || {};
                        table._dataTemp[tableId] = table._dataTemp[tableId] || {};
                        table._dataTemp[tableId][trIndex] = data;
                        } else if (layEvent === 'moveUp') {
                        tablePlug.moveUp(tableId, trIndex);
                        } else if (layEvent === 'moveDown') {
                        tablePlug.moveDown(tableId, trIndex);
                        } else {
                        typeof layui.data[obj.event] === 'function' && layui.data[obj.event].call(that, obj);
                    }
            });
            // 监听编辑如果评分负数给回滚到修改之前并且弹出提示信息并且重新获得焦点等待输入
            table.on('edit(test)', function (obj) {
                var tableId = obj.tr.closest('.layui-table-view').attr('lay-id');
                var trIndex = obj.tr.data('index');
                var that = this;
                var tdElem = $(that).closest('td');

                var field = obj.field;
                var value = obj.value;
                if (field === 'score') {
                value = parseInt(value);
                if (isNaN(obj.value) || value < 0) {
                    setTimeout(function () {
                    // 小于0回滚再次获得焦点打开
                    obj.update({score: table._dataTemp[tableId][trIndex][field]});
                    layer.msg('评分输入不合法，必须是大于0的数字!', {anim: 6});
                    tdElem.click();
                    }, 100);
                } else {
                    tablePlug.renderTotal(tableId);
                }
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
        }
    }
</style>