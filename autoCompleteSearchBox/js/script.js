let $ = document
let wrapperElem =  $.querySelector('.search-input')
let searchInputElem = $.querySelector('input')
let autocompleteBox= $.querySelector('.autocom-box')

searchInputElem.addEventListener('keyup',function(){
    let searchValue = searchInputElem.value
    if(searchValue){
        wrapperElem.classList.add('active')
        let filteredSugg = suggestions.filter(function(word){
            return word.toLowerCase().startsWith(searchValue.toLowerCase())
        }) 
        console.log(filteredSugg);
        suggGenerator(filteredSugg)

    }else{
        wrapperElem.classList.remove('active')
    }
})

function suggGenerator(suggArrays){
    let searchValue = searchInputElem.value
    let suggsLi = suggArrays.map(function(word){
        return '<li>'+ word + '</li>'
    })
    

    let liElem
    if (!suggArrays.length){
        liElem = '<li>'+ searchValue + '</li>'
    }else{
        liElem = suggsLi.join('')
    }
    console.log(liElem);
    autocompleteBox.innerHTML = liElem
    selectSugg()
    
}

function selectSugg(){
    
    let allLi = autocompleteBox.querySelectorAll('li')
    allLi.forEach(function(words){
        words.addEventListener('click',function(event){
            searchInputElem.value = event.target.textContent
            wrapperElem.classList.remove('active')
        })
    })
}