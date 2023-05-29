/**
 *
 * @name This program converts minutes to hours
 * @param {number} minutes
 * @returns {number} hours
 *
 */

 function ConvertMinutesToHours(minutes) {
    return minutes / 60;
  }
  
  // Console Tests
  console.log("How many hours is 60 minutes? " + ConvertMinutesToHours(60) + " hour");
  console.log("How many hours is 1,440 minutes? " + ConvertMinutesToHours(1440) + " hours");
  console.log("How many hours is 525,600 minutes? " + ConvertMinutesToHours(525600) + " hours");
