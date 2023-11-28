let rec printNumbers n =
    if n > 0 then
        printNumbers (n - 1)
        printf "%d " n
    else
        ()

// Read input from the user
printf "Enter a number: "
let input = Console.ReadLine()
let n = int input

// Call the function to print numbers
printNumbers n
