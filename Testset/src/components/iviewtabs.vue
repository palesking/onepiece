<template>
    <div class="iviewtabs">
        <Table
        border 
        context-menu
        show-context-menu 
        :columns="columns1" :data="data1" @on-contextmenu="handleContextMenu">
            <template slot="contextMenu">
                <DropdownItem @click.native="handleContextMenuEdit">编辑</DropdownItem>
                <DropdownItem @click.native="handleContextMenuDelete" style="color: #ed4014">删除</DropdownItem>
            </template>
        </Table>
    </div>
</template>
<script>
export default {
    name:'iviewtabs',
    data () {
        return {
            currentId: '',
            currentScore: '',
            columns1: [
                {
                    title: 'Name',
                    key: 'name',
                    render(h) {
                        
                    },
                },
                {
                    title: 'Age',
                    key: 'age',
                    render: (h, p) => {
                        const { id, age } = p.row
                        const inp = h('input', {
                            style: {
                                width: '30%',
                                padding: '4px 2px',
                                borderRadius: '4px',
                                border: '1px solid #e9eaec',
                                textAlign: 'center'
                            },
                            attrs: {
                                maxlength: 16
                            },
                            domProps: {
                                value: age
                            },
                            on: {
                                    input: (event) => {
                                    this.currentScore = event.target.value
                                }
                            }
                        })
                        return this.currentId === p.row.age ? inp : h('span', age)
                    }
                },
                {
                    title: 'Address',
                    key: 'address',
                    render: (h, p) => {
                        const { currentId } = this
                        const { id } = p.row
                        const btnEdit = h('i-button', {
                            on: {
                                click: () => {
                                    this.currentId = id
                                }
                            }
                        }, '编辑')

                        const btnSaveCancel = [
                            h('i-button', {
                                on: {
                                    click: () => {
                                        this.handleSave(id)
                                    }
                                }
                            }, '保存'),
                            h('i-button', {
                                on: {
                                    click: () => {
                                        this.currentId = ''
                                        this.currentScore = ''
                                    }
                                }
                            }, '取消')]
                        return currentId === id ? h('div', btnSaveCancel) : btnEdit
                    }
                }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],
            contextLine: 0
        }
    },
    methods: {
        handleContextMenu (row) {
            const index = this.data1.findIndex(item => item.name === row.name);
            this.contextLine = index + 1;
        },
        handleContextMenuEdit () {
            console.log(this)
            this.$Message.info('Click edit of line' + this.contextLine);
        },
        handleContextMenuDelete () {
            this.$Message.info('Click delete of line' + this.contextLine);
        },
        handleSave (id) {
            const {currentScore, data1} = this
            this.data1 = data1.map(v => {
                return v.id === id ? { ...v, age: currentScore } : v
            })
            this.currentId = ''
            this.currentScore = ''
        }
    },
}
</script>
<style lang="less" scoped>
    .iviewtabs{
        width: 1200px;
        margin: auto;
        padding: 100px 0;
    }
</style>