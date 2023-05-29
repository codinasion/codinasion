function convertHoursToDays(hours) {
  return hours / 24;
}

const hours = 120;
console.log(`Input: ${hours} ${hours > 1 ? 'hours' : 'hour'}`);
const result = convertHoursToDays(hours);
console.log(`Output: ${result} ${result > 1 ? 'days' : 'day'}`);