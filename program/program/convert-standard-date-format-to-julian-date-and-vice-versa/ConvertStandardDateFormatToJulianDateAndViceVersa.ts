function standardToJulian(date: string): string {
    const [year, month, day] = date.split('-').map(Number);
    const julianDay = getDayOfYear(year, month, day);
    return `${year}-${pad(julianDay, 3)}`;
}

function julianToStandard(julianDate: string): string {
    const [year, dayOfYear] = julianDate.split('-').map(Number);
    const date = getDateFromDayOfYear(year, dayOfYear);
    const month = pad(date.getMonth() + 1, 2);
    const day = pad(date.getDate(), 2);
    return `${year}-${month}-${day}`;
}

function getDayOfYear(year: number, month: number, day: number): number {
    const date = new Date(year, month - 1, day);
    const startOfYear = new Date(year, 0, 0);
    const diff = +date - +startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function getDateFromDayOfYear(year: number, dayOfYear: number): Date {
    const date = new Date(year, 0); // January 1st
    date.setDate(dayOfYear);
    return date;
}

function pad(num: number, size: number): string {
    let str = num.toString();
    while (str.length < size) {
        str = '0' + str;
    }
    return str;
}

// Example usage:
const standardDate = '2022-02-22';
const julianDate = '22-053';

console.log(`Standard to Julian: ${standardToJulian(standardDate)}`);
console.log(`Julian to Standard: ${julianToStandard(julianDate)}`);
