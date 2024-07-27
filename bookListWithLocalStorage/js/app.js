let $ = document
const titleInput = $.querySelector('#title')
const authorInput = $.querySelector('#author')
const yearInput = $.querySelector('#year')
const submitBtn = $.querySelector('.add-btn')
const booksContainer = $.querySelector('#book-list')

let booksArray=[]

submitBtn.addEventListener('click',function (event){

    event.preventDefault()

    let titleContain = titleInput.value
    let authorContain = authorInput.value
    let yearContain = yearInput.value
    if(titleContain === ''|| authorContain === '' || yearContain ==='' ){

        alert('Fill the all of inputs plz :)')

    }else{
    let newObb = {
        id: booksArray.length +1 ,
        title : titleContain ,
        Author : authorContain,
        year : yearContain
    }

    booksArray.push(newObb)
    setLocal(booksArray)
    
    elemGeneator(booksArray)
} }
)

function elemGeneator(arrayOfBooks){


    let newtr , newthTitle , newthAuther , newthYear 

    booksContainer.innerHTML = ''

    arrayOfBooks.forEach(function(bookElem){
        console.log(bookElem);

        newtr = $.createElement('tr')
        
        newthTitle = $.createElement('th')
        newthTitle.innerHTML = bookElem.title

        newthAuther = $.createElement('th')
        newthAuther.innerHTML = bookElem.Author


        newthYear= $.createElement('th')
        newthYear.innerHTML= bookElem.year

        newtr.append(newthTitle,newthAuther,newthYear)
        booksContainer.append(newtr)
        console.log(booksContainer);
        
        
    })
}

function setLocal(arrayOfBooks){
    localStorage.setItem('books',JSON.stringify(arrayOfBooks))
    elemGeneator(arrayOfBooks)
    empty()
}

function empty(){
    titleInput.value = ''
    authorInput.value = ''
    yearInput.value = ''
}

function loadfunc(){
    let booksOfLocal = localStorage.getItem('books')
    if(booksOfLocal){
        books = JSON.parse(booksOfLocal)
        elemGeneator(books)
    }    
}

window.addEventListener('load',loadfunc)