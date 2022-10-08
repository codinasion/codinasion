function convertDaysToSeconds (days: number): number {
  let hours = 24, minutes = 60, seconds = 60, secondsInADay;
  secondsInADay = hours * minutes * seconds
  return Math.round(days * secondsInADay)
}

console.log(convertDaysToSeconds(5))