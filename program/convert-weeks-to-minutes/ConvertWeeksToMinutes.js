
/**
 * 
 * @param {number} weeks 
 * @returns {number} number of minutes in `weeks`
 */
function convertWeeksToMinutes(weeks) {
    return weeks*7*24*60
}

const minutesInFiveWeeks = convertWeeksToMinutes(5) 

console.log(minutesInFiveWeeks)