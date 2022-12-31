function paiseToRupees(num: number) {

    // 100 paise = 1 Rupee
    // 1 paise = 1/100 Rupee
    // 800 paise = 800/100 Rupees = 8 Rupees
    return (num/100)
}

console.log("Paise to Rupees", paiseToRupees(100)+ " rupees")
