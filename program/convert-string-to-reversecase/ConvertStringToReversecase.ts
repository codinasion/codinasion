const string2ReverseCase = (str: string): string => {
   return str.split('').map(char => char.match(/[a-z]/) ? char.toUpperCase() 
          : char.toLowerCase()).join('');
 }
 
console.log(string2ReverseCase('hello world'));
