const findDigitalRootByRecursion=(val:number)=>{
    // If the value is less than 10, viz the digit already single digit
    if(val<10) return val;
    // using the recursion finding the sum of digit
    val=val%10+findDigitalRootByRecursion(val/10);
    // removing the decimal part
    val=~~val;
    return findDigitalRootByRecursion(val);
}

console.log(findDigitalRootByRecursion(1234));
console.log(findDigitalRootByRecursion(642));
console.log(findDigitalRootByRecursion(0));
console.log(findDigitalRootByRecursion(1));