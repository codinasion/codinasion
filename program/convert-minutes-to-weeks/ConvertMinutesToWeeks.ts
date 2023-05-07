function ConvertMinutesToWeeks(minutes: number) {
    // 1 day = 1440 minutes
    // 1 week = 10080 minutes

    const days = minutes / 1440;
    const week = days / 7;
    return week;

}

console.log(ConvertMinutesToWeeks(50400) + " weeks");
