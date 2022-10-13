function CelciusToFahrenheit(celsius:number):number{   //conversion function
    return (celsius * 9/5) + 32;
}

let celsius:number = -40;
console.log(CelciusToFahrenheit(celsius));   //-40
