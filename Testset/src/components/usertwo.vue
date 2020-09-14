<template>
    <div class="usertwo">
        <!-- <div class="layui-container">
            <div class="layui-row layui-col-space10">
                <div class="layui-col-xs12" style="margin-top: 10px;">
                <div class="layui-form">
                    <div class="layui-form-item">
                    <label class="layui-form-label">是否跨页记录</label>
                    <div class="layui-input-inline">
                        <input type="checkbox" name="status" lay-skin="switch" checked="checked" lay-filter="statusSwitch">
                    </div>
                    <div class="layui-input-inline">
                        <span class="layui-btn layui-btn-sm layui-btn-danger" onclick="resetCheckboxStatus(this)" data-id="demo">重置选中状态</span>
                    </div>
                    <label class="layui-form-label">固定列滚动支持</label>
                    <div class="layui-input-inline">
                        <input type="checkbox" lay-skin="switch" checked="checked" lay-filter="tableFixedScrollSwitch"
                            lay-text="开启|关闭">
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div> -->
        <table id="demo" class="table_th_search" lay-filter="test"></table>
        <script type="text/html" id="barDemo">
            <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">查看</a>
            <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
            <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
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
        <!-- <div class="layui-inline">
            <span><span style="color: red;">※</span>url模式测试用的是json文件所以翻页请用这里按钮，不要用table的中的laypage组件，实际开发中不会有这个问题</span>
        </div> -->
        </script>
    </div>
</template>
<script>
export default {
    
    mounted() {
        layui.config({base: 'test/js/'}).use(['mockjax', 'testTablePlug', 'laydate'], function () {
            var $ = layui.jquery,
                //弹层
                layer = layui.layer, 
                //弹层
                form = layui.form, 
                //表格
                table = layui.table ,
                //日期控件
                laydate = layui.laydate, 
                //表格插件
                tablePlug = layui.tablePlug, 
                // 测试js模块
                testTablePlug = layui.testTablePlug,
                // 针对form在特定场合下的渲染的封装 
                renderFormSelectsIn = layui.renderFormSelectsIn, 
                //多选下拉插件
                formSelects = layui.formSelects; 

                // 当前这个测试页面测试的重点不是智能重载，所以关掉该功能，
                //实际上该功能也是默认关闭的，可以不执行下面这句代码，也可以强制指定。
                // tablePlug.smartReload.enable(true); // 默认就是打开的状态

            // 处理操作列
            var fn1 = function (field) {
                return function (data) {
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

            // 爱好列
            var fnLike = function (d) {
                var likes = [
                    {value: 'write', title: '写作'},
                    {value: 'read', title: '阅读'},
                    {value: 'daze', title: '发呆'}
                ];
                return [
                    '<select name="like" xm-select="like_selects_' + (d.id || (new Date().getTime() + '_' + Math.ceil(Math.random() * 1000000))) + '" xm-select-show-count="2">', 
                        // xm-select实际的作用就跟id差不多，所以实际使用中要注意唯一性，
                        function () {
                            var str = '';
                            var values = d.like ? d.like.split(',') : [];
                            layui.each(likes, function (index, like) {
                                str += '<option value="' + like.value + '" ' + (values.indexOf(like.value) !== -1 ? 'selected' : '') + '>' + like.title + '</option>'
                            });
                            return str;
                        }(),
                    '</select>'
                ].join('');
            };

            var laytpl = layui.laytpl;
            var tplTemp = '你好！ <%d.name%> v<%layui.v%> ';

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
            //         layero.find('.layui-layer-content').append('<i class="layui-icon layui-icon-close" onclick="layer.close(' + index + ')" style="float: right;cursor: pointer;"></i>')
            //     },
            //     resize: false

            // });

            formSelects.opened(function (id) {
                alert('打开了...1');
            }).closed(function (id) {
                alert('关闭了...1');
            });

            // 新增init的时候针对后台返回的默认选中是一个对象集合的处理，init之后会将默认选中的data也存起来，后面获得选中数据的时候getCache也能获得默认选中的数据，
            tablePlug.tableCheck.init('demo',
                [
                    {
                        "id": 10000,
                        "username": "user-0",
                        "sex": "女",
                        "city": "北京",
                        "sign": "签名-0",
                        "experience": 0,
                        "logins": 24,
                        "birthday": "1989/01/01",
                        "wealth": 82830700,
                        "classify": "作家",
                        "like": "write,read",
                        "score": 57
                    }, 
                    {
                        "id": 10001
                    }
                ],
                'id' 
                // 第三个参数，主键名称，如果表格的主键名不是'id'那么这个参数必须制定，以为一般来说init会在render之前执行，
                // 所以如果不指定，他找不到表格配置信息，也就不知道里面配合的主键名称是什么，导致变成默认的'id'后面render出来就没有效果了
            );

            table.render({
                elem: '#demo',
                height: 720, 
                size: 'lg', 
                //数据接口
                url: 'json/data.json',  
                title: '用户表', 
                even: true, 
                //开启分页
                page: {},  
                headers: {
                    pageCompute: true
                }, 
                loading: true, 
                //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
                toolbar: '#toolbarDemo', 
                //开启合计行 
                totalRow: true,  
                cellMinWidth: 90, 
                // 是否开启字段筛选的记忆功能，支持true/false/'local'/'session'/其他 开启的情况下默认是session，除非显式的指定为'local'
                colFilterRecord: true, 
                // 开启智能重载
                smartReloadModel: true, 
                // 默认反转
                // reversal: true, 
                // 设置开启部分选项不可选
                // 设置表格的主键（主要用在记录选中状态还有不可操作记录的时候用
                primaryKey: 'id', 
                checkDisabled: {
                    enabled: true,
                    data: [10000, 10001, 10002, 10003, 10004, 10005, 10009]
                }, 
                //  pageLanguage: 'zh-TW', // 需要自己定义对应的文本
                //  pageLanguage: 'en', // tablePlug里面已经定义了，如果觉得不满意可以用tablePlug.set去更新默认的配置;
                //  pageLanguage: true, // 无效的设置方式，只支持字符串或者对象的
                // 也可以针对某个表格有特殊的配置如下面对象的设置方法,但是如果没有必要单独的自定义建议使用直接赋值成语言名称的字符串形式
                pageLanguage: {
                    lan: 'en',
                    // 可自定义text,lan为en的情况下
                    text: {
                        // jumpTo: 'jump to', // 到第
                        // page: 'page', // 页
                        // go: 'go', // 确定zzzz
                        // total: 'total', // 共
                        unit: 'item' // 条（单位，一般也可以不填）
                        // optionText: 'limit each page' // 条/页
                    }
                }, 
                done: function (res, curr, count) {
                    var tableView = this.elem.next();
                    var tableId = this.id;

                    // 针对表格中的多选下拉的处理
                    renderFormSelectsIn(tableView, {}, 'layuiTable');

                    // 初始化laydate
                    layui.each(tableView.find('td[data-field="birthday"]'), function (index, tdElem) {
                        tdElem.onclick = function (event) {
                            layui.stope(event)
                        };
                        laydate.render({
                            elem: tdElem.children[0],
                            // closeStop: tdElem,
                            format: 'yyyy/MM/dd',
                            done: function (value, date) {
                                var trElem = $(this.elem[0]).closest('tr');
                                table.cache.demo[trElem.data('index')]['birthday'] = value;
                            }
                        })
                    });
                },
                parseData: function (ret) {
                    return {
                        code: ret.code,
                        msg: ret.msg,
                        count: ret.data ? (ret.data.total || 0) : 0,
                        data: ret.data ? (ret.data.list || []) : []
                    }
                },
                checkStatus: {},
                cols: [
                    [
                        {type: 'checkbox', fixed: 'left', rowspan: 2, totalRowText: '共计:'},
                        {type: 'numbers', fixed: 'left', rowspan: 2},
                        {field: 'id',title: 'ID',filter: true,width: 80,sort: true,fixed: 'left',rowspan: 2},
                        {title: '基本信息', colspan: 3, align: 'center'},
                        {title: '详细信息', colspan: 7, align: 'center'},
                        {fixed: 'right',type: 'toolbar',field: 'toolbar_move',title: '',width: 150,align: 'center',toolbar: '#moveBar',rowspan: 2},
                        {fixed: 'right',type: 'toolbar',field: 'toolbar_common',title: '操作',width: 90,align: 'center',toolbar: '#barDemo',rowspan: 2}
                    ],
                    [ 
                        //表头
                        {field: 'username', title: '姓名', hideable: false},
                        {field: 'sex', title: '性别', width: 90, filter: true, sort: true},
                        {field: 'birthday', title: '生日', edit: false, width: 120},
                        {field: 'experience', title: '积分', width: 90, sort: true, totalRow: true},
                        {field: 'score', title: '评分', edit: true, event: 'editField', width: 90, sort: true, totalRow: true},
                        {field: 'city', title: '城市', search: true, edit: false, width: 150, type: 'normal', templet: fn1('city')},
                        {field: 'sign',title: '签名',width: 200,edit: true},
                        {field: 'classify', title: '职业', filter: true, width: 100},
                        {field: 'like', title: '爱好', width: 240, edit: false, templet: fnLike},
                        {field: 'wealth', title: '财富', width: 135, filter: true, sort: true, totalRow: true}
                    ]
                ]
            });


            // 监听表格中的下拉选择将数据同步到table.cache中
            form.on('select(city_select)', function (data) {
                var selectElem = $(data.elem);
                var tdElem = selectElem.closest('td');
                var trElem = tdElem.closest('tr');
                var tableView = trElem.closest('.layui-table-view');
                table.cache[tableView.attr('lay-id')][trElem.data('index')][tdElem.data('field')] = data.value;
            });

            //监听排序事件
            table.on('sort(test)', function (obj) { });

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

            // tr点击触发复选列点击
            $(document).on('click', '.layui-table-view tbody tr', function (event) {
                var elemTemp = $(this);
                var tableView = elemTemp.closest('.layui-table-view');
                var trIndex = elemTemp.data('index');
                tableView.find('tr[data-index="' + trIndex + '"]').find('[name="layTableCheckbox"]+').last().click();
            });

            // 监听固定列滚动支持的开关切换
            form.on('switch(tableFixedScrollSwitch)', function (obj) {
                tablePlug.enableTableFixedScroll(obj.elem.checked);
            });

            $('.fruit_type_in .fruit_type_text').on('click', function () {
                setTimeout(function () {
                    $('#type_list')
                    .find('select[name="要找的select的name"]')
                    .next('div.layui-form-select')
                    .find(".layui-input")
                    .get(0)
                    .click();
                }, 0);
            });
        });
    },
}
</script>
<style lang="less" scoped>
    @import '../../public/test/js/formSelects/formSelects-v4.css';
    .layui-form-label {
      width: 100px;
    }

    .layui-input-block {
      margin-left: 130px;
    }

    .layui-table-view tbody tr.layui-table-selected {
      background-color: hotpink;
    }

    .layui-table-view tbody tr.layui-table-selected.layui-table-hover {
      background-color: lightpink;
    }

    .layui-table-tips input[type="radio"] {
      display: none;
    }

    .layui-table-view table.layui-table tbody tr.layui-table-click {
      background-color: #bbfefe;
    }

    /* 贤客服样式 -- 开始 */
    .XIANKEFU-bar {
      z-index: 101;
    }

    @media screen and (max-width: 1440px) {
      .XIANKEFU-bar span {
        display: none;
      }
    }
</style>