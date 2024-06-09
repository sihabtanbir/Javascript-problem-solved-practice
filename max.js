const disha = 96;
const salman = 80;

if (disha > salman){
    console.log('disha get this')
} 
else {
    console.log( 'salman get')
}


// function 

function getMax(num1, num2){
    if(num1>num2){
        return num1;
    }
    else {
        return num2;
    }
}

const max = getMax(56, 59);
console.log(max)

// predefined 

const maxxx = Math.max(12,32,33,33,43,67)
console.log(maxxx);

// array max 

const height = [45,45,54,654,7544,45,9756,566]

function getMaxx(numbers){
    let max = numbers[0];

    for (const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const maxxxxx = getMaxx(height);
console.log(maxxxxx)