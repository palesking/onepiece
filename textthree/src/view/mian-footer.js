import React ,{Component} from 'react'
import {Layout,Row,Col,Divider,Menu} from "antd"
import 'antd/dist/antd.css'
import '../index.css'
export default class Mianfooter extends Component{
    render(){
        return (
            <div>
                <Layout.Footer id={"Footer"}>
                    备案号：豫ICP备19046453号
                </Layout.Footer>
            </div>
        )
    }
}