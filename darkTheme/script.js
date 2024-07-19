const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {
  // Hint: Add 'dark' class to body :))
  document.body.classList.toggle('dark')
  if(document.body.className.includes('dark')){
    localStorage.setItem('theme','dark')

  }else{
    localStorage.setItem('theme','light')
  }
})

window.onload = function(){
    let storageTheme = localStorage.getItem('theme')
    if( storageTheme === 'dark'){
        document.body.classList.add('dark')
    }

}