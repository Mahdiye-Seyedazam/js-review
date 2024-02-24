var purches = ['mag' , 'pen' , 'ereaser' , 'hoodi']
var usershop = []

var shop = prompt('what do you want to buy?')

var isuser = purches.some(function (i) {

    if( shop == i){

        usershop.push(shop)
        alert('your shop is finished :) ')
    
    }else{

        alert('your equest did not found in our products \n sorry :( ')

    }
    
})



console.log(usershop)



