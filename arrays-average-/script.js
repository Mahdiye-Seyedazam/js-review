var array = []

var total = 0

for(var i ; new_element != -1 ;i++){

    var new_element = +prompt('enter your number : ')
    array.push(new_element)
    
    var total = total + new_element
    
}
total += 1
array.pop() 
alert(total/(array.length))
console.log(array)



//if you want to end program please enter -1 