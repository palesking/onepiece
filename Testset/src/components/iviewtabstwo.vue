<template>
    <div class="iviewtabstwo">
        <i-table 
            border
            highlight-row 
            ref="currentRowTable" 
            :columns="columns" 
            :data="tableData"
        ></i-table>
    </div>
</template>
<script>
export default {
    name:'iviewtabstwo',
    data () {
        return {
            currentId: '',
            currentScore: '',
            columns: [
                { title: '名称', key: 'name', align: 'center' },
                {
                    title: '班级',
                    align: 'center',
                    render: (h, p) => {
                        const { id, score } = p.row
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
                                value: score
                            },
                            on: {
                                    input: (event) => {
                                    this.currentScore = event.target.value
                                }
                            }
                        })
                        return this.currentId === p.row.id ? inp : h('span', score)
                    }
                },
                {
                    title: '操作',
                    align: 'center',
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
            tableData: [
                { id: 1, name: 'nb', score: 'nb' },
                { id: 2, name: 'nb', score: 'nb' }
            ]
        }
    },

    methods: {
        handleSave (id) {
            const {currentScore, tableData} = this
            this.tableData = tableData.map(v => {
                return v.id === id ? { ...v, score: currentScore } : v
            })
            this.currentId = ''
            this.currentScore = ''
        }
    }
}
</script>
<style lang="less" scoped>
    .iviewtabstwo{
        width: 1200px;
        margin: auto;
        padding: 100px 0;
    }
</style>