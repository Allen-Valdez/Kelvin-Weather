//This is the forecast today.
const kelvin = 293;
//this is celsius, which is 273 degree less than Kelvin.
const celsius = kelvin - 273;
//This is converting celsius to fahrenheit
let fahrenheit = celsius *(9/5) + 32;
//this is to cut off the decimal
Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);