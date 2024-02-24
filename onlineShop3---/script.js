

var pocket = [{id:1,name :'shoes',price:200},{id:2,name :'scarf',price:250},{id:3,name :'pen',price:10},{id:1,name:'mag',price:50} , {id:2,name:'pen',price:90} ,{id:4,name: 'hoodi',price:220}]


var postCost = 0
var mainCost = 0

var lessThan100 = pocket.map(function(item){
    if(item.price < 100){
        postCost += 1000
        mainCost += Number(item.price)

    }else{
        postCost += 0
        mainCost += Number(item.price) 
    }
    return postCost , mainCost
})



alert('you shoud pay '+postCost + 'for post cost')
alert('you shoud pay '+mainCost + 'for products cost')








