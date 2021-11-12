const kelvin ='293' //varible is set to const to const to becaue it should not change

let celsius =(kelvin -273) //varible celsius is kelvin - 273 

let fahrenheit = (celsius *(9/5)) +32; //fahrenheit is defined by that equation

fahrenheit = Math.floor (fahrenheit); //Math.floor is used to round decimals, this is storing the information into fahrenheit

const sentence = `The temperature today is ${fahrenheit} degrees Fahrenheit.`;
console.log(sentence);
