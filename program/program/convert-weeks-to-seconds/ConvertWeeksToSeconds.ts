function convertWeeksToSeconds(weeks: number) 
{
  const seconds =  weeks*7*24*60*60;

  return seconds;
}


const weeks = 5
const seconds = convertWeeksToSeconds(weeks)

console.log(seconds)

// contributed by technical Amanjeet
