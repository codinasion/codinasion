function convertHoursToWeeks(hours: number) {
    // 168 hours = 1 week
    // 840 hours = x week
    // 168x = 840
    // x = 840 / 168

    const weeks = hours / 168;
    return weeks;
}

console.log(convertHoursToWeeks(840) + " weeks");
