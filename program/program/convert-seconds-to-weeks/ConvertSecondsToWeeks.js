const secsToMins = 1 / 60;
const minsToHrs = 1 / 60;
const hrsToDays = 1 / 24;
const daysToWeeks = 1 / 7;

const convertSecondsToWeeks = (seconds) => {
    const secsToWeeks =
        seconds * secsToMins * minsToHrs * hrsToDays * daysToWeeks;
    return secsToWeeks;
};

console.log(convertSecondsToWeeks(3024000));
