// 12 inch 1 feet 

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

function inchTofeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchremaining = inch %12; 
    const result = feetNumber + ' ft ' + inchremaining + ' inch';
    return result;
}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight)

const shuvoHeight2 = inchTofeet2(75);
console.log(shuvoHeight2)

function mileToKilometer(mile){
    const kilo = mile * 1.60934; 
    return kilo; 
}
const totalMile = mileToKilometer(5);
console.log(totalMile)

function kgToGram(kg){
    const gram = kg*1000;
    return gram;
}
const totalGram = kgToGram(4.44);
console.log(totalGram)