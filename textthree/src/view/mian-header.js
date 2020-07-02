import React ,{Component} from 'react'
import {Layout,Row,Col,Divider,Menu} from "antd"
import {
    HomeOutlined,
    BookOutlined,
    InfoCircleOutlined,
  } from '@ant-design/icons';
import 'antd/dist/antd.css'
import '../index.css'
import { Link } from 'react-router-dom'
export default class Mianheader extends Component{
    render(){
        return (
            <div>
                <Layout.Header>
                    <Row className={"wrap"}>
                        <Col md={8}>
                            <h1 id={"logo"}>discussion</h1>
                        </Col>
                        <Col md={16}>
                            <Divider type={"vertical"} id={"HeadDivider"}></Divider>
                            <Menu mode={"horizontal"} id={"HeadMenu"}>
                                <Menu.Item>
                                    <Link to={"/index/all"}><HomeOutlined/>首页</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to={"/book"}><BookOutlined/>教程</Link>
                                    </Menu.Item>
                                <Menu.Item>
                                    <Link to={"/about"}><InfoCircleOutlined/>关于</Link>
                                    </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Layout.Header>
            </div>
        )
    }
}