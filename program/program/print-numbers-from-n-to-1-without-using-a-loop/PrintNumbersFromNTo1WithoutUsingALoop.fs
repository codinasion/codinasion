// Write a F# program to print numbers from n to 1 without using a loop

// Input  : 5
// Output : 5 4 3 2 1

let mutable num = 5;

let rec printNumbers i =
    if i > 0 then
        printf "%d " i
        printNumbers (i - 1)

printNumbers num