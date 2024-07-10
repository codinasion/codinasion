let rec ternary_search (arr: int array) (value: int) (left: int) (right: int) =
    if left <= right then
        let partition_size = (right - left) / 3
        let mid1 = left + partition_size
        let mid2 = right - partition_size

        if arr.[mid1] = value then
            mid1
        elif arr.[mid2] = value then
            mid2
        elif value < arr.[mid1] then
            ternary_search arr value left (mid1 - 1)
        elif value > arr.[mid2] then
            ternary_search arr value (mid2 + 1) right
        else
            ternary_search arr value (mid1 + 1) (mid2 - 1)
    else
        -1

// Example usage
let list = [|1; 2; 3; 4; 5|]
let value = 4

let result = ternary_search list value 0 (Array.length list - 1)

printfn "List: %A" list
printfn "Value to be searched: %d" value
printfn "Output: %d" result
