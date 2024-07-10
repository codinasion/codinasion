let FindLargestAndSmallestNumbersInAnArray (input: int list) =
    let sortedInput = List.sort input
    let smallest = sortedInput.[0]
    let largest = sortedInput.[sortedInput.Length-1]
    printfn "Smallest Number in the array: %d" smallest
    printfn "Largest Number in the array: %d" largest

let input = [1; 2; 3; 9; 6; 4; 5]
FindLargestAndSmallestNumbersInAnArray input
