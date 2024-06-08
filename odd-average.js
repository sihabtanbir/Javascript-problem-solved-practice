const odds = [];
function oddAverage(numbers){
    for(const number of numbers){
        if (number %2 === 1){
        odds.push(number);
        }
    }
     console.log(odds);

    let sum = 0; 
for (const number of odds){
    sum = sum + number;

}
const count = odds.length;
console.log(sum , count );
const abg = sum / count ; 
return abg; 
}

const numbers =[42, 44,47,32,35, 35]
const avg = oddAverage(numbers);
console.log("odd average is", avg)


