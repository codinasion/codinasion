/**
 * 
 * @param {number} seconds - value of seconds
 * @returns {number} value of minutes
 */
function secondsToMinutes(seconds){
    return seconds / 60;
}

console.log('Input: 300');
console.log('Output:', secondsToMinutes(300));