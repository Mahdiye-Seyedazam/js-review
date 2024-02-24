var word = 'nin'


var teke = word.split('')
var revers = teke.reverse()
var revers_word = revers.join('')

console.log(teke);

console.log(revers);
console.log(revers_word);

if(word === revers_word){

    alert('ok')
}else{
    alert('No')
}


