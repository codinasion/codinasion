function convertDayToHours(days) {
    // 1 days = 24hours
    // 5 days = ? hours
    // 5 days = 5 * 24 = 120 hours

    return days * 24;
}

console.log(`${convertDayToHours(5)} Hours`)
