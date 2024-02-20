var total =0
for (var i = 5 ; i>0 ; i--){

    var score = +prompt('What is your score ? ')
    var total = (total + score)
    var average = total / 5   
}

alert('average of your scores are : '+ average)