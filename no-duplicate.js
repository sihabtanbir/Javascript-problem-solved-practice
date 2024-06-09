
const biraniKhor =['abul', 'babul', 'kabul', 'sabul', 'abul', 'babul'];
const numbers =[ 5,14,25,52,14,5,71];

function noDuplicate(array){
    const unique = []
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqeArray = noDuplicate(biraniKhor);
console.log(uniqeArray)