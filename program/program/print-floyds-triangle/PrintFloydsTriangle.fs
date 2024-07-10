let printFloydsTriangle n =
    let mutable count = 1
    for i = 1 to n do
        for j = 1 to i do
            printf "%d " count
            count <- count + 1
        printfn ""

// Example usage with input 5
printFloydsTriangle 5