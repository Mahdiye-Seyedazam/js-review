var array = [
    {id : 1,name:'ali',age:22},
{id : 2,name:'lida',age:20},
{id : 3,name:'sara',age:34},
{id : 4,name:'amin',age:12},
{id : 5,name:'shahin',age:21},
{id : 6,name:'negar',age:18},
{id : 7,name:'fateme',age:15}
]


var allow = prompt("Do you want to join confrance ? (yes / no ) \n if the age of members is greather than 18 conference will start \n we search it... ")


Isok = array.every(function(item){

    return item.age>18
})

if (Isok == true){

    alert('conference is starting . . . ')
    console.log(array)
}else{

    alert('the age of members is less than 18 \n confrance will not start')
}

