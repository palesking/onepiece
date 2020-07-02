import React ,{Component} from 'react'
import {Switch,Route,BrowserRouter,Redirect} from 'react-router-dom';
import Index from '../view/index/index';
import Book from '../view/book/index';
import User from '../view/user/index';
import Details from '../view/details/index'
import About from '../view/about/index'

export default class RouterIndex extends Component{
    render(){
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={()=>(
                        <Redirect to="/index/all"/>
                    )}/>
                    {/* 动态路由 */}
                    <Route path='/index/:id' component={Index}/>
                    <Route path='/book' component={Book}/>
                    <Route path='/about' component={About}/>
                    <Route path='/details' component={Details}/>
                    <Route path='/user' component={User}/>
                </Switch>
            </div>
        )
    }
}