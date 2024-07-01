open System

let jumpSearch (arr: 'a[]) (x: 'a) (comparer: 'a -> 'a -> int) =
    let n = arr.Length
    let step = int (Math.Floor(Math.Sqrt(float n)))
    let mutable prev = 0

    // Finding the block where element is present
    while prev < n && comparer arr.[Math.Min(step, n) - 1] x < 0 do
        prev <- step
        step <- step + int (Math.Floor(Math.Sqrt(float n)))
        if prev >= n then
            return -1 // Element not found

    // Linear search for x in block beginning with prev
    while prev < n && comparer arr.[prev] x < 0 do
        prev <- prev + 1
        if prev = Math.Min(step, n) then
            return -1 // Element not found

    // If element is found
    if prev < n && comparer arr.[prev] x = 0 then
        prev
    else
        -1 // Element not found

// Example usage
let arr = [|0; 1; 2; 3; 4; 5; 6; 7; 8; 9; 10|]
let x = 7
let result = jumpSearch arr x compare

if result <> -1 then
    printfn "Element %d is at index %d" x result
else
    printfn "Element %d is not present in the array" x
