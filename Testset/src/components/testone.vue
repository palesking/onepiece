<template>
    <div class="testone">
        <h1>测试文件</h1>
        <div class="testone-content">
            <Table row-key="id" :columns="columns" :data="userdata" border :draggable="true"
              @on-drag-drop="onDragDrop">
                <template slot-scope="" slot="one">
                    <i class="layui-icon layui-icon-component" style="padding:0;"></i>
                </template>
                <template slot-scope="" slot="address">
                    <div class="ew-tree-table-td-single">
                        <div class="ew-tree-tips">
                            <span>菜单</span>
                        </div>
                    </div>
                </template>
                <template slot-scope="" slot="three">
                    <div class="ew-tree-tips"> 
                        <a>布局</a> 
                        <a>修改</a> 
                        <a>删除</a> 
                    </div>
                </template>
                <!-- <template slot-scope="{ row, index }" slot="sort">
                    <span>{{ index + 1 }}</span>
                </template>
                <template slot-scope="{ row, index }" slot="materielTypeNo">
                    <Input
                    type="text"
                    v-model="row.materielTypeNo"
                    required
                    @on-change="changematerielTypeNo(row, index)"
                    />
                </template>
                <template slot-scope="{ row, index }" slot="materielTypeName">
                    <Input
                    type="text"
                    v-model="row.materielTypeName"
                    required
                    @on-change="changeInput(row, index)"
                    />
                </template>
                <template slot-scope="{ row, index }" slot="action">
                    <Poptip confirm transfer title="确定删除？" @on-ok="handleRemove(row, index)">
                    <Button size="small" type="error" ghost class="ivu-mr">删除</Button>
                    </Poptip>
                </template> -->
            </Table>
            <transition name="ivu-anim-fade">
                <div v-if="tipsFlag" class="ivu-mt">
                    <Alert type="warning" show-icon>修改排序后必须确认保存</Alert>
                </div>
            </transition>
            <Page 
                :total="dataCount" 
                :page-size="pageSize" 
                @on-change="changepage" 
                @on-page-size-change="changepagesize"
                show-elevator
                show-sizer 
                show-total
                >
            </Page>
        </div>
    </div>
</template>
<script>
export default {
    name:'testone',
    data() {
        return {
            alldata:[],
            // 初始化信息总条数
            dataCount:0,
            // 每页显示多少条
            pageSize:10,
            userdata: [],
            tipsFlag:false,
            columns: [
                {
                    type:'index',
                    title: '排序',
                    key: 'name',
                    width:'80',
                    url:'123'
                },
                {
                    title: '所属模块',
                    key: 'age',
                    width:'100'
                },
                {
                    title: '权限名称',
                    key: 'address',
                    tree: true,
                    width:'200'
                },
                {
                    title: '图标',
                    key: 'two',
                    slot: 'one',
                    width:'75',
                    align:'center'
                },
                {
                    title: '菜单URL',
                    key: 'one'
                },
                {
                    title: '标识组',
                    key: 'address'
                },
                {
                    title: '类型',
                    key: 'address',
                    slot:"address",
                    width:'90',
                    align:'center'
                },
                {
                    title: '操作',
                    key: 'address',
                    slot:'three',
                    width:260,
                    align:'center'
                }
            ],
            data: [
                {
                    id: '1',
                    name: 1,
                    age: '基础功能',
                    address: '控制中心',
                    one:'暂无数据',
                    two:'',
                    children: [
                        {
                            id: '1-1',
                            name: '1-1',
                            age: '基础功能',
                            address: '仪表盘'
                        }
                    ]
                },
                {
                    id: '2',
                    name: '2',
                    age: '基础功能',
                    address: '权限管理',
                    one:'暂无数据',
                    children: [
                        {
                            id: '2-1',
                            name: '2-1',
                            age: '基础功能',
                            address: '权限管理',
                            one:'暂无数据'
                        },
                        {
                            id: '2-2',
                            name: '2-2',
                            age: '基础功能',
                            address: '权限管理',
                            one:'暂无数据'
                        },
                        {
                            id: '2-3',
                            name: '2-3',
                            age: '基础功能',
                            address: '权限管理',
                            one:'暂无数据'
                        }
                    ]
                },
                {
                    id: '3',
                    name: '3',
                    age: '基础功能',
                    address: '系统监控',
                    one:'暂无数据',
                    children: [
                        {
                            id: '3-1',
                            name: '3-1',
                            age: 24,
                            address: '系统监控',
                            one:'暂无数据',
                        }
                    ]
                },
                {
                    id: '4',
                    name: '4',
                    age: '基础功能',
                    address: '开发工具',
                    one:'暂无数据',
                    children: [
                        {
                            id: '4-1',
                            name: '4-1',
                            age: '基础功能',
                            address: '开发工具',
                            one:'暂无数据',
                        }
                    ]
                },
                {
                    id: '5',
                    name: '5',
                    age: '基础功能',
                    address: '开发工具',
                    one:'暂无数据',
                    children: [
                        {
                            id: '5-1',
                            name: '5-1',
                            age: '基础功能',
                            address: '开发工具',
                            one:'暂无数据',
                        }
                    ]
                },
                {
                    id: '6',
                    name: '6',
                    age: '基础功能',
                    address: '开发工具',
                    one:'暂无数据',
                    children: [
                        {
                            id: '6-1',
                            name: '6-1',
                            age: '基础功能',
                            address: '开发工具',
                            one:'暂无数据',
                        }
                    ]
                },
                {
                    id: '7',
                    name: '7',
                    age: '基础功能',
                    address: '开发工具',
                    one:'暂无数据',
                    children: [
                        {
                            id: '7-1',
                            name: '7-1',
                            age: '基础功能',
                            address: '开发工具',
                            one:'暂无数据',
                        }
                    ]
                },
                {
                    id: '8',
                    name: '8',
                    age: '基础功能',
                    address: '开发工具',
                    one:'暂无数据',
                    children: [
                        {
                            id: '8-1',
                            name: '8-1',
                            age: '基础功能',
                            address: '开发工具',
                            one:'暂无数据',
                        }
                    ]
                },
                {
                    id: '9',
                    name: '9',
                    age: '基础功能',
                    address: '开发工具',
                    one:'暂无数据',
                    children: [
                        {
                            id: '9-1',
                            name: '9-1',
                            age: '基础功能',
                            address: '开发工具',
                            one:'暂无数据',
                        }
                    ]
                },
                {
                    id: '10',
                    name: '10',
                    age: '基础功能',
                    address: '开发工具',
                    one:'暂无数据',
                    children: [
                        {
                            id: '10-1',
                            name: '10-1',
                            age: '基础功能',
                            address: '开发工具',
                            one:'暂无数据',
                        }
                    ]
                },
                {
                    id: '11',
                    name: '11',
                    age: '基础功能',
                    address: '开发工具',
                    one:'暂无数据',
                    children: [
                        {
                            id: '11-1',
                            name: '11-1',
                            age: '基础功能',
                            address: '开发工具',
                            one:'暂无数据',
                        }
                    ]
                },
            ],
        }
    },
    methods: {
         // 处理数据函数
        handlechangedata(){
            
            // 保存取到的所有数据
            this.alldata = this.data
            this.dataCount = this.data.length;     

            // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
            if(this.dataCount < this.pageSize){
                this.userdata = this.alldata;
            }else{
                this.userdata = this.alldata.slice(0,this.pageSize);
            }    
        },
        // 页码改变的回调,返回改变后的页码
        changepage(index){
            var _start = ( index - 1 ) * this.pageSize;
            var _end = index * this.pageSize;
            this.userdata = this.alldata.slice(_start,_end);
        },
        //每页条数的回调
        changepagesize(pageSize){
            this.pageSize = pageSize;
            this.handlechangedata()
        },
        onDragDrop(a,b){
            console.log(a,b);
            this.data.splice(b,1,...this.data.splice(a, 1 , this.data[b]));
        }
    },
    created(){
        this.handlechangedata();
    },

}
</script>
<style lang='less' scoped>
    .testone{
        width: 1000px;
        height: 600px;
        margin: auto;
    }
</style>