

let users = [
    { id: 1, name: 'ali', age: 22, email: 'ali@gmail.com' },
    { id: 2, name: 'amin', age: 20, email: 'amin@gmail.com' },
    { id: 3, name: 'qadir', age: 18, email: 'qadir@gmail.com' },
    { id: 4, name: 'sasan', age: 32, email: 'sasan@gmail.com' },
]

const getuser = userID => {
    let mainUser = users.find(user=>user.id == userID)
        return mainUser
    
}


const userIDInput = document.querySelector('#user-id')

userIDInput.addEventListener('keypress',event=>{
    let {keyCode,target:input} = event

    if(keyCode===13){

        let {name , email,age} = getuser(input.value)

        console.log(name);
        console.log(age);
        console.log(email);

    }
})

