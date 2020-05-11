import React ,{Component} from 'react'
import {Card,Avatar,List} from "antd"
import 'antd/dist/antd.css'
import Texttag from '../texttag'
import { Link } from 'react-router-dom'
import '../../index.css'

export default class Replylist extends Component{
    render(){
        let {replies} = this.props 
        //console.log(replies)
        return (
            <div>
                <List
                className={"stylesix"}
                loading={false}
                dataSource={replies}
                renderItem={
                    item=>(
                        <List.Item
                        id={"stylefive"}
                        extra={
                        //console.log(item)
                        item.ups.length >0 ?<span className={"styleserve"}>有{item.ups.length}个人赞了这条回复</span>:''}
                        >
                            <List.Item.Meta
                            avatar={<Avatar src={item.author.avatar_url} />}
                            description={
                                <p>
                                    <Link to={"/item.author.loginname"}>{item.author.loginname}</Link>
                                    发表于:{item.create_at.split("T")[0]}
                                </p>
                            }
                            >
                            </List.Item.Meta>
                            <div dangerouslySetInnerHTML={{__html:item.content}}>

                            </div>
                        </List.Item>
                    )
                }
                >
                </List>
            </div>
            )
    }
}