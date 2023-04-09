/**
 *
 * @name This program converts minutes into seconds
 * @param {number} minutes
 * @returns {number} seconds
 *
 * @example
 * ```ts
 * const area1 = ConvertMinutesToSecondsTS(5) // 300
 * const area2 = ConvertMinutesToSecondsTS(1) // 60
 * ```
 */
function ConvertMinutesToSecondsTS(minutes: number) {
    return minutes * 60;
  }
  
  // Console Tests
  console.log("Number of seconds in 5 minutes.");
  console.log("That is" + ConvertMinutesToSecondsTS(5) + "// 300");
  
  console.log("Number of seconds in 15 minutes.");
  console.log("That is" + ConvertMinutesToSecondsTS(15) + "// 900");
  
  console.log("Number of seconds in 2.5 minutes.");
  console.log("That is" + ConvertMinutesToSecondsTS(2.5) + "// 150");
  