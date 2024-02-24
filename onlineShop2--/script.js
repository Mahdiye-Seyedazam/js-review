var purches = [{id:1,name:'mag'} , {id:2,name:'pen'} , { id:3,name:'erea' } ,{id:4,name: 'hoodi'}]

var pocket = [{id:1,name :'shoes'},{id:2,name :'scarf'},{id:3,name :'pet'}]

var shop = prompt('what do you want to do? \n1.remove some thing of your pocket \n2.Add some thing to your pocket')

if(shop === "1"){

    if(pocket.length == 0){

        alert('your pocket is empty please add some thing to your pocket for remove ... ')

    }else{
    

        var which = prompt('what do you want to delete ? ')

        var del = pocket.findIndex(function (item) {

            return which==item.name
            
        
        

    })
    pocket.splice(del,1)
    console.log(pocket)
        
}
    

}else if(shop == '2' ) {

    var whichadd = prompt('what do you want to add ? \nour products is : mag , pen , ereaser , hoodi')
    var isthere=purches.some(function(items){
    if (whichadd == items.name ){
        var new_pocket = {
            id : (pocket.length)+1 ,
            name : whichadd
        }
        pocket.push(new_pocket)
            console.log(pocket) 
            alert('your request added to your pocket :)')      
        }
        
    })
    
    
    

}









