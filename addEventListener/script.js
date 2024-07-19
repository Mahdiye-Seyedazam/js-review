let userMasseg = document.querySelector('.userValidation')
let passwordrMasseg = document.querySelector('.passwordValidation')

let userInput = document.querySelector('.user-input')
let passInput = document.querySelector('.pass-input')


function userValidation(){

     if(userInput.value.length<12){
          userMasseg.style.color='red'
          userMasseg.innerHTML='must be 12 char(min)'
          userMasseg.style.display='block'

     }else{
          userMasseg.style.color='green'
          userMasseg.innerHTML='correct username'

     }

     setTimeout(function(){
          userMasseg.style.display='none'
     },5000)

}

function passwordValidation(){
     if(passInput.value.length<8){
          passwordrMasseg.style.color='red'
          passwordrMasseg.innerHTML='must be 8 char(min)'
          passwordrMasseg.style.display='block'

     }else{
          passwordrMasseg.style.color='green'
          passwordrMasseg.innerHTML='correct username'

     }

     setTimeout(function(){
          passwordrMasseg.style.display='none'
     },5000)
}