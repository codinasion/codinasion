function convertHoursToDays (hours: number): number {
    const days=hours/24;
    return days;
}

// Test Cases
console.log(convertHoursToDays(120));
console.log(convertHoursToDays(792));