import React ,{Component} from 'react'
import data from './data'
import {Card,Avatar} from "antd"
import 'antd/dist/antd.css'
import Texttag from '../texttag'
import { Link } from 'react-router-dom'
import Txtdetails from './txtdetails'
import Replylist from './replylist'
export default class Details extends Component{
    render(){
        //console.log(data.data)
        return (
            <div className={"stylefour"}>
                <Txtdetails 
                ></Txtdetails>
                <Replylist
                replies={ data.data.replies }
                replyCount={ data.data.reply_count }
                ></Replylist>
            </div>
        )
    }
}