function convertWeeksToMinutes(weeks: number) {
    return weeks*7*24*60
}

const minutesInFiveWeeks = convertWeeksToMinutes(5) 

console.log(minutesInFiveWeeks)