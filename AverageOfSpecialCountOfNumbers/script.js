var countOF = 0
var sum = 0
var score = 0

while(score != -1){

    sum = sum + score
    score = +prompt("Enter your score : \n\n  If you have not a number please enter -1 ")
    if (score!= -1){
        countOF++
    }
    


}


console.log("Average of your scores is : "+ (sum/countOF))