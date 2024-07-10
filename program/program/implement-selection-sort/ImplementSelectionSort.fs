let selectionSort (arr: int[]) =
    let swap (arr: int[]) (i: int) (j: int) =
        let temp = arr.[i]
        arr.[i] <- arr.[j]
        arr.[j] <- temp

    let findMinIndex (arr: int[]) (start: int) =
        let mutable minIndex = start
        for i = start + 1 to arr.Length - 1 do
            if arr.[i] < arr.[minIndex] then
                minIndex <- i
        minIndex

    for i = 0 to arr.Length - 2 do
        let minIndex = findMinIndex arr i
        if minIndex <> i then
            swap arr minIndex i

// Test the selectionSort function
let arr = [| 64; 25; 12; 22; 11 |]
selectionSort arr
printfn "Sorted array: %A" arr
