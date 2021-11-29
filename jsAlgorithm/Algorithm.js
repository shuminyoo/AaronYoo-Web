
//Qustion 1

function adding (num1, num2) {
    let result =  num1 + num2;
    return result;
}
console.log(`Addition : ${adding(3,2)}`);

//Question 2

function areaCircle (radius) {
    let circleResult = Math.PI * radius * radius;
    return circleResult;
}
console.log(`Area of the circle: ${areaCircle(2)}`);

//Question 3 

function bigNum (q3num1, q3num2) {
    let q3Result = q3num1 + q3num2;
    if (q3Result < 100) {
        return true;
    } else {
        return false;
    }
}
console.log(`Is the sum less than 100? : ${bigNum(20,20)}`);

//Question 4

function gettingOlder (year) {
    let q4Result = year % 4
    if (q4Result === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(`Is this a leap year? : ${gettingOlder(2021)}`)

//Question 5

function tenOrNot (q5num1, q5num2) {
    let q5Result = q5num1 + q5num2;
    if (q5Result === 10 || q5num1 === 10 || q5num2 === 10) {
        return true
    } else {
        return false
    }
}
console.log(`Is this correct? : ${tenOrNot(7,10)}`);