let rec binarySearch (arr: 'a[]) (x: 'a) (lowerBound: int) (upperBound: int) : int =
    if upperBound < lowerBound then
        -1 // x does not exist
    else
        let midPoint = lowerBound + (upperBound - lowerBound) / 2
        if arr.[midPoint] < x then
            binarySearch arr x (midPoint + 1) upperBound
        elif arr.[midPoint] > x then
            binarySearch arr x lowerBound (midPoint - 1)
        else
            midPoint // x found at midPoint

// Example usage
let arr = [|2; 3; 4; 10; 40|]
let x = 10
let result = binarySearch arr x 0 (Array.length arr - 1)
if result <> -1 then
    printfn "Element %d is present at index %d" x result
else
    printfn "Element %d is not present in array" x
