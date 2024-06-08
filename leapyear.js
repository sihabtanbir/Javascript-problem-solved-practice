function leapYear (year){
    if(year % 4 === 0){
        return true;
    }

    else {
        return false;
    }
}
 const leap = leapYear(20209);
 console.log(leap);

 function leapYear2(year){
    if (year % 100 !==0 && year % 4 === 0){
        return true;
    }
    else if ( year % 100 ===0 && year % 400 === 0){
        return true;
    }
    return false; 
 }
 const leap2 = leapYear2(2052);
 console.log(leap2)
