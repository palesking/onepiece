<template>
    <div>
        <h1>测试文件四</h1>
        <a href='https://gitee.com/sun_zoro/layuiTablePlug' target="gitee_tablePlug"
        style="position: absolute; right: 0;top:0;">
        <img src='https://gitee.com/sun_zoro/layuiTablePlug/widgets/widget_1.svg' alt='Fork me on Gitee'>
        </a>
        <div class="layui-container">
        <div class="layui-row layui-col-space10">
            <div class="layui-col-xs12" id="testFlow">
            <table id="demo" class="table_th_search" lay-filter="test"></table>
            </div>
        </div>
        </div>

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
            <span class="layui-btn layui-btn-sm" lay-event="deleteSome">批量删除</span>
            <span class="layui-btn layui-btn-sm layui-btn-primary" lay-event="reload">重载</span>
        </div>
        </script>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log($)

        layui.use(['table', 'laydate', 'flow'], function () {

            var $ = layui.jquery
                , layer = layui.layer //弹层
                , form = layui.form //弹层
                , table = layui.table //表格
                , laydate = layui.laydate //日期控件
                , flow = layui.flow //流加载
                , tablePlug = layui.tablePlug; //表格插件

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

            table.render({
                elem: '#demo'
                // , height: 'full-135'
                // , height: 560
                , size: 'lg'
                // , url: 'json/data11.json' //数据接口
                , data: []
                , title: '用户表'
                , even: true
                // , page: {} //开启分页
                , limit: Number.MAX_VALUE
                , loading: true
                , toolbar: '#toolbarDemo' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
                // , totalRow: true //开启合计行
                , cellMinWidth: 90
                // 是否开启字段筛选的记忆功能，支持true/false/'local'/'session'/其他 开启的情况下默认是session，除非显式的指定为'local'
                , colFilterRecord: true
                // 开启智能重载
                , smartReloadModel: true
                // 默认反转
                // , reversal: true
                // 设置开启部分选项不可选
                // 设置表格的主键（主要用在记录选中状态还有不可操作记录的时候用
                , primaryKey: 'id'
                , checkDisabled: {
                enabled: true,
                data: [10000, 10001, 10002, 10003, 10004, 10005, 10009]
                }
                // , pageLanguage: 'zh-TW' // 需要自己定义对应的文本
                // , pageLanguage: 'en' // tablePlug里面已经定义了，如果觉得不满意可以用tablePlug.set去更新默认的配置;
                // , pageLanguage: true // 无效的设置方式，只支持字符串或者对象的
                // 也可以针对某个表格有特殊的配置如下面对象的设置方法,但是如果没有必要单独的自定义建议使用直接赋值成语言名称的字符串形式
                , done: function (res, curr, count) {
                var tableView = this.elem.next();
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
                    });
                });
                }
                , checkStatus: {}
                // , autoSort: false
                // , initSort: {
                //   field: 'id' //排序字段，对应 cols 设定的各字段名
                //   , type: 'asc' //排序方式  asc: 升序、desc: 降序、null: 默认排序
                // }
                , cols: [
                [
                    {type: 'checkbox', fixed: 'left', rowspan: 2, totalRowText: '共计:'/*, hide: true*/},
                    {type: 'numbers', fixed: 'left', rowspan: 2},
                    {
                    field: 'id',
                    title: 'ID',
                    filter: true,
                    width: 80,
                    sort: true,
                    fixed: 'left',
                    // totalRowText: '平均:',
                    rowspan: 2
                    },
                    {title: '基本信息', colspan: 3, align: 'center'},
                    {title: '详细信息', colspan: 6, align: 'center'},
                    {
                    fixed: 'right',
                    type: 'toolbar',
                    field: 'toolbar_move',
                    title: '',
                    width: 150,
                    align: 'center',
                    toolbar: '#moveBar',
                    rowspan: 2
                    },
                    {
                    fixed: 'right',
                    type: 'toolbar',
                    // hide: true,
                    field: 'toolbar_common',
                    title: '操作',
                    width: 90,
                    align: 'center',
                    toolbar: '#barDemo',
                    rowspan: 2
                    }
                ]
                , [ //表头
                    {field: 'username', title: '姓名', hideable: false/*, hide: true*/}
                    , {field: 'sex', title: '性别', width: 90, filter: true, sort: true}
                    , {field: 'birthday', title: '生日', edit: false, width: 120}
                    , {field: 'experience', title: '积分', width: 90, sort: true, totalRow: true}
                    , {field: 'score', title: '评分', edit: true, event: 'editField', width: 90, sort: true, totalRow: true}
                    , {field: 'city', title: '城市', search: true, edit: false, width: 150, type: 'normal', templet: fn1('city')}
                    , {
                    field: 'sign',
                    title: '签名',
                    width: 200,
                    edit: true
                    }
                    , {field: 'classify', title: '职业', filter: true, width: 100}
                    , {field: 'wealth', title: '财富', width: 135, filter: true, sort: true, totalRow: true}
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
                if (value < 0) {
                    setTimeout(function () {
                    // 小于0回滚再次获得焦点打开
                    obj.update({score: table._dataTemp[tableId][trIndex][field]});
                    layer.msg('评分不能为负数!', {anim: 6});
                    tdElem.click();
                    }, 100);
                }
                }
            });

            var pageLimit = 5;
                flow.load({
                    elem: '#testFlow' //指定列表容器
                    // elem: $('#demo+ div .layui-table-main').get(0) //指定列表容器
                    , done: function (page, next) { //到达临界点（默认滚动触发），触发下一页
                    var elem = $(this.elem);
                    //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                    $.get('json/flowData' + page + '.json?page=' + page, function (res) {
                        // 将数据添加到table中
                        // tablePlug.addData('demo', res.data.list);
                        //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                        //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                        // next(null, page * pageLimit < res.data.total);
                    });
                    }
                });
            });
        },
    }
</script>
<style lang="less" scoped>
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
</style>