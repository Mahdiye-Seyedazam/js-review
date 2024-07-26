let $ = document
const inputEle = $.getElementById('itemInput')
const addBtn = $.getElementById('addButton')
const clearBtn = $.getElementById('clearButton')
const completBtn = $.getElementsByClassName('.btn-success')
const deletBtn = $.getElementsByClassName('.btn-danger')
const todolistElem = $.getElementById('todoList')

todoArray=[]

function objAdd(){
    let newTodoName = inputEle.value
    let newObj = {
        id : todoArray.length  +1 ,
        title : newTodoName ,
        complete : false 
    }
    
    todoArray.push(newObj)
    console.log(todoArray);
    localGenerate(todoArray)
    elemGenerator(todoArray)
    inputEle.value = ''
    inputEle.focus()
}

function localGenerate(todoDetail){
localStorage.setItem('todoDetails',JSON.stringify(todoDetail))
}

function elemGenerator(todoDetail){
    let newLable , newLi , newCompleteBtn , newDeleteBtn 
    todolistElem.innerHTML = ''
    
    
    todoDetail.forEach(function (todo) {
        console.log(todo);
        newLable = $.createElement('label')
        newLable.innerHTML = todo.title

        newLi = $.createElement('li')
        newLi.className = 'completed well'

        newCompleteBtn = $.createElement('button')
        newCompleteBtn.className = 'btn btn-success'
        newCompleteBtn.innerHTML = 'complete'
        newCompleteBtn.setAttribute('onclick','editeTodo('+todo.id+')')

        newDeleteBtn = $.createElement('button')
        newDeleteBtn.className = 'btn btn-danger'
        newDeleteBtn.innerHTML = 'Delete'
        newDeleteBtn.setAttribute('onclick','deleteTodo('+todo.id+')')

        if(todo.complete){
            newLi.className = 'uncompleted well'
            newCompleteBtn.innerHTML = 'Done'
        }

        newLi.append(newLable,newCompleteBtn,newDeleteBtn)
        todolistElem.append(newLi)
    })
    
}


function editeTodo(TodoID){
    let localData = JSON.parse(localStorage.getItem('todoDetails'))
    todoArray = localData

    todoArray.forEach(function(todo){
        if(todo.id === TodoID){
            todo.complete = !todo.complete
        }
    })

    localGenerate(todoArray)
}

function deleteTodo(TodoID){

    let localData = JSON.parse(localStorage.getItem('todoDetails'))
    todoArray = localData
    let mainIndex = todoArray.findIndex(function(todo){
        return todo.id === TodoID
    })
    todoArray.splice(mainIndex,1)
    elemGenerator(todoArray)
    localGenerate(todoArray)
}


function clearFunc(){
    localStorage.clear()
    todoArray=[]
    elemGenerator(todoArray)
}

addBtn.addEventListener('click',objAdd )
clearBtn.addEventListener('click',clearFunc)
inputEle.addEventListener('keydown',function(event){
    if(event.code === 'Enter'){
        objAdd()
    }
})







