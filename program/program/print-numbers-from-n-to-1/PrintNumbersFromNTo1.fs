// Write a F# program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

let mutable num = 5;
let mutable i = num;    

while(i >= 1) do    
  printfn "%d " i    
  i<- i - 1  


// Contributed by Technical Amanjeet
