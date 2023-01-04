// JavaScript program convert seconds into days
// Function convert second into day
function ConvertSectoDay(input) {
  let day =parseInt( input / (24 * 3600));
  document.write(`${day} days`);}
  
  // Given n is in seconds
  let input = 432000;
  ConvertSectoDay(input);
