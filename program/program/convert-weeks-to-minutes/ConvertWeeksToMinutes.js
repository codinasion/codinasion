/**
 * 
 * @param {number} weeks 
 * @returns {number} number of minutes in `weeks`
 */
 function convertWeeksToMinutesInJS(weeks) {
    return weeks*7*24*60
}

console.log(convertWeeksToMinutesInJS(5) )