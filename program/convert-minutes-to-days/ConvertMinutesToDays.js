/**
 *
 * @name This program converts minutes to days
 * @param {number} minutes
 * @returns {number} days
 *
 */

 function ConvertMinutesToDays(minutes) {
    return minutes / 24 / 60;
  }
  
  // Console Tests
  console.log("How many days is 7,200 minutes? " + ConvertMinutesToDays(7200) + " days");
  console.log("How many days is 21,600 minutes? " + ConvertMinutesToDays(21600) + " days");
  console.log("How many days is 525,600 minutes? " + ConvertMinutesToDays(525600) + " days");