import React ,{Component} from 'react'
import data from './data'
import { Card } from 'antd'
export default class Book extends Component{
    render(){
        //console.log(data)
        return (
            <div className={"styletwo"}>
                {
                    data.map((item,index)=>{
                        return(
                            <Card
                            key={index}
                            title={item.title}
                            type={"inner"}
                            >
                                <div dangerouslySetInnerHTML={{__html:item.content}}>

                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}