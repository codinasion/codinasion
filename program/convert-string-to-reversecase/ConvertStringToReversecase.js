function convertStringToReverseCase(str) {
   return str
      .split('')
      .map(char => char.match(/[a-z]/)  ? 
         char.toUpperCase() 
         : char.toLowerCase())
      .join('');
 }
