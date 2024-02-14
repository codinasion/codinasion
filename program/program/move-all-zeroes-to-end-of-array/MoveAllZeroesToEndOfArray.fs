let moveZeroesToEnd (arr : int[]) =
    let mutable index = 0
    let length = Array.length arr

    // Traverse the array and move all non-zero elements to the beginning
    for i = 0 to length - 1 do
        if arr.[i] <> 0 then
            arr.[index] <- arr.[i]
            index <- index + 1

    // Fill the remaining elements with zeroes
    while index < length do
        arr.[index] <- 0
        index <- index + 1

// Example usage:
let arr1 = [|1; 2; 0; 4; 3; 0; 5; 0|]
moveZeroesToEnd arr1
printfn "Output: %A" arr1

let arr2 = [|1; 2; 0; 0; 0; 3; 6|]
moveZeroesToEnd arr2
printfn "Output: %A" arr2
