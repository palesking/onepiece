import React ,{Component} from 'react'
import data from './data'
import {Card,Avatar} from "antd"
import 'antd/dist/antd.css'
import Texttag from '../texttag'
import { Link } from 'react-router-dom'

export default class Txtdetails extends Component{
    render(){
        return (
            <div className={"stylesix"}>
                <Card>
                    <Card.Meta
                    title={
                        <div>
                            <Texttag aaa={ data.data}></Texttag>
                            <h2>{data.data.title}</h2>
                            <Avatar src={data.data.author.avatar_url} />
                            <Link to={"/data.data[0].author.loginname"}>{data.data.author.loginname}</Link>
                            发表于:{data.data.create_at.split("T")[0]}
                        </div>
                    }
                    >
                    </Card.Meta>
                    <div dangerouslySetInnerHTML={{__html:data.data.content}}>

                    </div>
                </Card>
            </div>
            )
    }
}