import {combineReducers} from 'redux' //把所有需要处理的值结合起来
import list from './list'
import user from './user'
import details from './details'





let Reducers = combineReducers({
    list,
    details,
    user
})

export default Reducers;