var counter =0
var total = 0
while ( counter<=5){

    var score = +prompt('What is your score ? ')
    var total = (total + score)
    var average = total / 5 
    counter ++ 
}

alert('average of your scores are : '+ average)