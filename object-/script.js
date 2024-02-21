var array = [
    {id:1,name : 'Shahin' , lastname : 'shahsavari' , age : 23 , email : 'shahsavari@gmail.com'  },
    {id:2,name : 'Shahan' , lastname : 'zeyni' , age : 15 , email : 'zeyni@gmail.com'  },
    {id:3,name : 'mahin' , lastname : 'zeyni' , age : 20 , email : 'mahini@gmail.com'  },
]

var allow = prompt("Do you want to sign up ? (yes / no ) ")

var userName = prompt("enter your userName : ") 

var userLastName = prompt("enter your userLastName : ") 

var userAge = prompt("enter your userAge : ") 

var usermail = prompt("enter your mail : ") 


if (userName.length<3 || userLastName.length>10){

    alert('userName is not correct !')

}else if(userLastName.length<3 || userLastName.length > 15){

    alert('userLastName is not correct !')
    
}else if(userAge.length > 3 || isNaN(userAge)) {

    alert('userage is not correct !')
    
}
else if(allow =="Yes" || allow == 'yEs'|| allow == 'yeS'|| allow == 'YES'|| allow == 'YEs'|| allow == 'yES' ) {
    allow.toLowerCase()
}
else{


while(allow == 'yes'){

    var newuser = {id : array.length +1 , name : userName , lastname :userLastName , age : userAge , email : usermail }
    array.push(newuser)
    var allow = prompt("do you want to sign up ? (yes / no ) ")
    if(allow == 'no'){

        break

    }else if(allow == 'yes') {

        var userName = prompt("enter your userName : ") 

        var userLastName = prompt("enter your userLastName : ") 

        var userAge = prompt("enter your userAge : ") 

        var usermail = prompt("enter your mail : ")
    }





}}


alert('sign up finished :)')



console.log(array)