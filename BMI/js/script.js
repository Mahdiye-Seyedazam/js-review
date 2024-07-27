let $ = document

const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')
const resultInput = $.querySelector('#result')
const heightVal = $.querySelector('#height-val')
const weightVal = $.querySelector('#weight-val')
const categoryInput = $.querySelector('#category')

function calculate(){
    let weightNumber = weightInput.value
    let heightNumber = heightInput.value

    heightVal.innerHTML = heightNumber
    weightVal.innerHTML = weightNumber 

    let BMI = (weightNumber/Math.pow(heightNumber/100,2)).toFixed(1)
    resultInput.innerHTML = BMI 

    if(BMI < 18.5){
        categoryInput.innerHTML = 'UnderWeight'
        categoryInput.style.color = 'pink'
        resultInput.style.color = 'pink'

    }else if(BMI < 24.9 && BMI > 18.5) {
        categoryInput.innerHTML = 'NormalWeight'
        categoryInput.style.color = 'green'
        resultInput.style.color = 'green'
    }else if(BMI> 25 && BMI < 29.9){
        categoryInput.innerHTML = 'OverWeight'
        categoryInput.style.color = 'red'
        resultInput.style.color = 'red'
    }else{
        categoryInput.innerHTML = 'Obese'
        categoryInput.style.color = 'red'
        resultInput.style.color = 'red'
    }
}


weightInput.addEventListener('input',calculate)
heightInput.addEventListener('input',calculate)