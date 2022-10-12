// 60 Minutes = 1 Hour

function ConvertMinutesToHours(minute){
    let hours = minute/60
    return hours;
}

// Test Console
console.log(`${ConvertMinutesToHours(300)}Hours`);

console.log(`${ConvertMinutesToHours(120)}Hours`);

console.log(`${ConvertMinutesToHours(60)}Hours`);