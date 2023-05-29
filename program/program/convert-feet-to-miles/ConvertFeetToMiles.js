function feetToMiles(feet){
    return feet/5280;
}

console.log('JS program to convert feet to miles: 1 mile = 5280 feet');
let input = 26400;
console.log(`${input} feet is ${feetToMiles(input)} miles`);   // 5