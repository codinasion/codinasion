// function to reverse an array
let reverseArray (arr: int array) =
    let mutable reversedArr = Array.zeroCreate arr.Length
    for i = 0 to arr.Length - 1 do
        reversedArr.[arr.Length - 1 - i] <- arr.[i]
    reversedArr

let inputArray = [|1; 2; 3; 4; 5|]
let reversedArray = reverseArray inputArray
printfn "%A" reversedArray
