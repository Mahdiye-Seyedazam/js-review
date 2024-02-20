var number = prompt('Enter your number : ')

var sum = 0

if(isNaN(number)){
    
    alrt (" your input is not a number !")

    
}else if(number === 0) {
    alert("Count Of Your Digits is 1 ")
    
}else{

    for(var i ; (number/10) != 0 ; i++ ){
    
    
        var yekan = number % 10
        
        var sum  = sum + 1
    
        var number = Math.floor(number/10)
    
    }
    
    alert("Count Of Your Digits is : "+sum)

}
