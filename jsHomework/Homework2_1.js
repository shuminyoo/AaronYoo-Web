const kelvin ='0' 

let celsius =(kelvin -273)

let fahrenheit = (celsius *(9/5)) +32;

fahrenheit = Math.floor (fahrenheit);

const sentence = `The temperature today is ${fahrenheit} degrees Fahrenheit`;
console.log(sentence);