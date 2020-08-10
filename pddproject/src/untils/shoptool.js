let shoptools = {}
let shop = JSON.parse(window.localStorage.getItem("shopInfo") || "{}")


//更新并存储商品

shoptools.addUpdate = function(goods){
    if(shop[goods.id]){
        shop[goods.id] += goods.num
    }else{
        shop[goods.id] = goods.num
    }
    this.saveShops()
} 

shoptools.delete = function(id){
    delete shop[id]
    this.saveShops()
}

shoptools.getShop = function(){
    return JSON.parse(window.localStorage.getItem("shopInfo") || "{}")
}

shoptools.saveShops = function(){
    window.localStorage.setItem("shopInfo",JSON.stringify(shop))
}
export default shoptools