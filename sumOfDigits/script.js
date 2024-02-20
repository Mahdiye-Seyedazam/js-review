var number = Number(prompt('Enter your number : '))

var sum = 0
for(var i ; (number/10) != 0 ; i++ ){
    
    
    var yekan = number % 10
    
    var sum  = sum + yekan

    var number = Math.floor(number/10)

}

alert('Sum Of Your Digits is : '+sum)