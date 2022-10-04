function inchesToMiles(inches: number) {
    
    // 1 mile = 63360 inches
    // 316800 inches = x miles
    // 63360 x = 316800
    // x = 316800 / 63360

    let miles = inches / 63360;
    return miles;
}

console.log("Converting Inches to Miles", inchesToMiles(12345) +" miles");
