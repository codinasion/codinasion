function HoursToSeconds(hours: number) {

    // 1 hour = 60 minutes;
    // 1 minute = 60 seconds;
    // 1 hour = 60 mins * 60sec = 3600 seconds
 
    const minutes = hours * 60;
    const seconds = minutes * 60;
    return seconds;

}

console.log(HoursToSeconds(5) + " seconds");
