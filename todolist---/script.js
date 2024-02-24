var array = [
    {id:1,todoname : 'Task1' , situation : true },
    {id:2,todoname : 'Task2' , situation : false },
    {id:3,todoname : 'Task3' , situation : true  },
]

var menu = prompt(" what do you want ? \n 1-add new todo \n 2-delet todo \n 3-change situation of todo \n please enter (1/2/3) ")




if(menu === '1'){
    var TodoName = prompt("Enter your Todo Name : ") 
    var newTodo ={id:(array.length +1), todoname : TodoName , situation : 'not complete' }
    array.push(newTodo) 
    console.log(array)
}else if( menu === '2') {

    var whichTodo = prompt("Enter your todo Name to delet : ") 
    var userdata = array.findIndex(function (item) {

        return item.todoname == whichTodo

        
    })
    array.splice(userdata,1)

    console.log(array)
    
}else if(menu === '3') {

    var whichTodo = prompt("Enter your todo Name to change : ") 
    var userdata = array.map(function (i) {

        if(i.todoname==whichTodo){
            return i.situation = true
        }

        
    })
    console.log(array);    

}else{
    alert('please enter one of 1/2/3')
}

