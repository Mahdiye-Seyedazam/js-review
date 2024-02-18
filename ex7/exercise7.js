var age = prompt('enter your aage : ')

var sex = prompt('enter your sex(male / female) :  ')

if (sex === "female" || age < 18){

    alert('you can not use the site!')

}else if(isNaN(age)){
    alert('invalid input for age! ')

} else {

    alert('you can use the site :)')

}
