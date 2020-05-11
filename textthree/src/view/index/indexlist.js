import React ,{Component} from 'react'
import { List, Avatar } from "antd"
import data from './data'
import { Link } from 'react-router-dom'
import Texttag from '../texttag'
import axios from 'axios'
import {connect} from 'react-redux'
import "../../index.css"

let arr = []
for(let i = 0;i<100;i++){
arr.push(<li key={i}>这是第{i}个li</li>)
}


class Indexlist extends Component{
    constructor(arg){
        super(arg)
        this.state={
            page:1
        }
        this.getData(this.props.tab,this.state.page)
    }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps)
    //     if(this.props.tab !== nextProps.tab){
    //         this.state.page = 1;
    //         this.getData(nextProps.tab,1)
    //     }
        
    // }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.page !== nextState.page){
            this.getData(nextProps.tab,nextState.page)
        }

        //console.log(nextProps)
        if(this.props.tab !== nextProps.tab){
            this.state.page = 1;
            this.getData(nextProps.tab,1)
        }
        return true
    }
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
            .then((res)=>{
                //console.log(res)
                dispatch({
                    type:"LIST_UPDATA_SUCC",
                    data:res.data
                })
            })
            .catch((err)=>{
                //console.log(err)
            })
        })
    }
    render(){
        //console.log(this.props)
        let {loading , data } = this.props

        let pagination = {
            current:this.state.page,
            pageSize:10,
            total:500,
            showSizeChanger:false,
            defaultCurrent:1,
            onChange:(current)=>{
                //console.log(current)
                this.setState({
                    page:current
                })
            }
        }
        return (
            <div>
                <List 
                loading={loading}
                dataSource={data}
                pagination={pagination}
                renderItem={
                    item=>(
                        <List.Item
                        actions={["回复"+item.reply_count,"访问"+item.visit_count]}
                        >
                            <List.Item.Meta
                            className={"styleeight"}
                            title={
                            <div>
                                <Texttag aaa={ item }></Texttag>
                                <Link to={'/details/'+item.id}>{item.title}</Link>
                            </div>}
                            avatar={<Avatar src={item.author.avatar_url} />}
                            description={
                                <p>
                                    <Link to={"/item.author.loginname"}>{item.author.loginname}</Link>
                                    发表于:{item.create_at.split("T")[0]}
                                </p>
                            }
                            >
                            </List.Item.Meta>
                        </List.Item>
                    )
                }
                ></List>
            </div>
        )
    }
}
export default connect(state=>state.list)(Indexlist);