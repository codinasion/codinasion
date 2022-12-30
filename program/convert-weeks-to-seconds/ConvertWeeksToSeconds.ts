function convertWeeksToSeconds(weeks: number) 
{
  let seconds =  weeks*7*24*60*60;

  return seconds;
}


let weeks = 5
let seconds = convertWeeksToSeconds(weeks)

console.log(seconds)

// contributed by technical Amanjeet
