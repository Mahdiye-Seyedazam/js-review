var array = [
    {id:1,name : 'Shahin' , lastname : 'shahsavari' , age : 23 , email : 'shahsavari@gmail.com'  },
    {id:2,name : 'Shahan' , lastname : 'zeyni' , age : 15 , email : 'zeyni@gmail.com'  },
    {id:3,name : 'mahin' , lastname : 'zeyni' , age : 20 , email : 'mahini@gmail.com'  },
]

array.forEach(function(i){

    console.log('id =>  ' + i.id +'name => '+i.name + 'Lastname => '+ i.lastname + 'age => ' + i.age + 'emai => ' + i.email)

})