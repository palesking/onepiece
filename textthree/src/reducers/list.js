function list(state={
    data:[],
    loading:true
} ,action){
    switch(action.type){
        case "LIST_UPDATA_SUCC":
            return {
                data:action.data.data
            }
        default:
            return state
    }
}

export default list;