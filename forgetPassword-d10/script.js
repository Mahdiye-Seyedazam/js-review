var dataBase = [
    {id:1,name :'mahix',password:'1379sd'},
    {id:1,name :'shahin',password:'1234ff'},
    {id:1,name :'mahin',password:'mm256'}
]

var ask = prompt('do you forget your password?')
var userName = prompt('Enter your user name for reset your password :')

if(ask=='yes'){
    var userpassword = dataBase.find(function(item){
        if(userName==item.name){
            alert('your password is : '+ item.password)
            return item.password

        }else{
            alert('you are not ser of this site... ')
        }
    })
}
