function toJulianDate(dateString) {
    const date = new Date(dateString);
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay) + 1; // Add 1 because dayOfYear should start at 1, not 0
    return `${date.getFullYear()}${String(day).padStart(3, '0')}`;
}


function fromJulianDate(julianDate) {
    const year = parseInt(julianDate.substring(0, 4), 10);
    const dayOfYear = parseInt(julianDate.substring(4), 10);
    const resultDate = new Date(year, 0); 
    resultDate.setDate(dayOfYear); 
    return resultDate.toISOString().split('T')[0];
}


const testDate = '2023-06-10'; 
const julianDate = toJulianDate(testDate);
const gregorianDate = fromJulianDate(julianDate);
console.log(julianDate); 
console.log(gregorianDate); 