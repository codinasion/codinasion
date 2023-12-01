let printDiamond n =
    // Function to print a single line of the diamond
    let printLine i =
        let stars = new string('*', i * 2 - 1)
        let spaces = new string(' ', n - i)
        printfn "%s%s" spaces stars

    // Upper half of the diamond
    for i in 1 .. n do
        printLine i

    // Lower half of the diamond
    for i in n - 1 .. -1 .. 1 do
        printLine i

// Take the size of the diamond from the user
printfn "Enter the size of the diamond: "
let size = System.Console.ReadLine() |> int

// Print the diamond
printDiamond size