function convertWeeksToSeconds(weeks: number) {
    // 1 day = 24 * 3600 = 86400 seconds
    // 1 week = 7 * 86400 = 604800 seconds
    // therefore, 5 weeks has 5 * 604800 seconds = 3024000

    let weeksToSeconds = weeks * 604800;
    return weeksToSeconds;
}

console.log(convertWeeksToSeconds(5));
