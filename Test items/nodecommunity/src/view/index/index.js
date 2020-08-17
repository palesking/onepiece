import React ,{Component} from 'react'
import {Link} from "react-router-dom"
import {Layout,Row,Col,Divider,Menu} from "antd"
import 'antd/dist/antd.css'
import "../../index.css"
import Indexlist from "./indexlist"
import data from './data'
import { List } from 'antd/lib/form/Form'
export default class Index extends Component{
    render(){
        //console.log(data)
        //console.log(this.props.match.params.id)
        let tab = this.props.match.params.id
        return (
            <Row className={"styleone"}>
                <Col md={6} className={"menuleft"}>
                    <Menu>
                        <Menu.Item>
                            <Link to="/index/all">全部</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/good">精华</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/ask">问答</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/job">招聘</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/dev">客户端测试</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col md={18} id={"indexlist"}>
                    <Indexlist
                    tab={tab}
                    >
                    </Indexlist>
                </Col>
            </Row>
        )
    }
}