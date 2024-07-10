let printArrayElements (arr : int[]) =
    for i in arr do
        printf "%d " i

// Here's how to use the function:
let arr = [|1; 2; 3; 4; 5|]
printArrayElements arr // Output: 1 2 3 4 5
