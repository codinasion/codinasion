let rec linearSearch (list : int list) (value : int) (index : int) : int option =
    match list with
    | [] -> None
    | x::xs -> 
        if x = value then Some index
        else linearSearch xs value (index + 1)

let searchValue = 4
let list = [1; 2; 3; 4; 5]

match linearSearch list searchValue 0 with
| Some index -> printfn "Output: %d" index
| None -> printfn "Value not found"

