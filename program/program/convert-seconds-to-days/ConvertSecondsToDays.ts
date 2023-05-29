function converSecondsToDays(seconds: number): number {
    const day = 86400; //Seconds in 24 Hours
    return Math.round(seconds / day);
}

console.log(converSecondsToDays(432000))