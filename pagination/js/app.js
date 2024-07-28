const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];

let listContainer = document.querySelector('#list')
let pageBtnContainer = document.querySelector('#pagination')

let rowCount =5
let curentPage =3
function displayDataOfList(allArray,userContainer,countOfRow , nowPage){

    userContainer.innerHTML=''

    let endIndex = rowCount*curentPage
    let startIndex = endIndex-rowCount

    let paginatedUsers = allArray.slice(startIndex,endIndex)
    console.log(paginatedUsers);

    paginatedUsers.forEach(function(user){
        let newElemForUser = document.createElement('div')
        newElemForUser.classList.add('item')
        newElemForUser.innerHTML= user.name + '' + user.family
        listContainer.appendChild(newElemForUser)

    })
}

function setupPage(allArray,pagesContainer,countOfRow){

    pagesContainer.innerHTML = ''

    let pageBtnCount = Math.ceil(allArray.length/countOfRow)

    for (let i =1 ; i< pageBtnCount + 1 ; i++) {

        let newBTn = pageBtnGenerator(i,allArray)
        pagesContainer.appendChild(newBTn)

    }

}

function pageBtnGenerator(page,allArray){

    let newElemForPageBtn = document.createElement('button')
    newElemForPageBtn.innerHTML = page


    if(page === curentPage){

        newElemForPageBtn.classList.add('active')

    }

    newElemForPageBtn.addEventListener('click',function(){
        curentPage=page
        displayDataOfList(allArray,listContainer,rowCount,curentPage)
        let prePage = document.querySelector('button.active')
        prePage.classList.remove('active')
        newElemForPageBtn.classList.add('active')
    });
    
    return newElemForPageBtn
}



displayDataOfList(listItems,listContainer,rowCount,curentPage)
setupPage(listItems,pageBtnContainer,rowCount)




