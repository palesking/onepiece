<template>
    <div class="testtwo">
    <!--main-->
        <table class=" layui-table dataTabble">
            <thead>
                <!-- <draggable> -->
                    <tr v-for="(item,index) in tableheader" :key="index">
                        <draggable>
                            <th>{{item.name}}</th>
                        <!-- <th width="200">{{item.time}}</th>
                        <th width="160">{{index}}</th>
                        <th width="160">{{index}}</th> -->
                        </draggable>
                    </tr>
                <!-- </draggable> -->
            </thead>
        <draggable v-model="tablelist" element="tbody" :move="getdata" @update="datadragEnd">
            <tr v-for="(item,id) in tablelist" :key="id">
                <td>{{item.name}}</td>
                <td>{{item.time}}</td>
                <td>{{item.num}}</td>
                <td>
                    <div class="tabopa">
                    <!-- <a @click="dialogFormVisible = true" style="cursor:pointer">添加</a>
                    <a @click="open2">删除</a> -->
                    </div>
                </td>
            </tr>
        </draggable>
        </table>
        <div class="zhu mt40">提示：拖动可对栏目进行排序</div>
    <!--main end-->
    </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
        tableheader:[
            { id: 1, name: "活动消息1", time: "2018-08-25 14：54" },
            // { id: 2, name: "公司消息2", time: "2018-08-25 14：54" },
            // { id: 3, name: "个人消息3", time: "2018-08-25 14：54" },
            // { id: 4, name: "客户消息4", time: "2018-08-25 14：54" }
        ],
        tablelist: [
            { id: 5, name: "活动消息1", time: "2018-08-25 14：54", num: "1000" },
            { id: 6, name: "公司消息2", time: "2018-08-25 14：54", num: "200" },
            { id: 7, name: "个人消息3", time: "2018-08-25 14：54", num: "30000" },
            { id: 8, name: "客户消息4", time: "2018-08-25 14：54", num: "40" }
        ],
    };
  },
  methods: {
    //拖动中与拖动结束
    getdata(evt) {
        console.log(evt.draggedContext.element.id);
    },
    datadragEnd(evt) {
        console.log("拖动前的索引 :" + evt.oldIndex);
        // console.log("拖动后的索引 :" + evt.newIndex);
        // console.log(this.tags);
    },
  }
}
</script>
<style>
    .testtwo{
        width: 1000px;
        height: 200px;
        margin: auto;
    }
</style>