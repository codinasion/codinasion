let avg aList =
    let rec sum = function
        | head :: tail -> head + (sum tail)
        | [] -> 0.
    sum aList / (aList |> List.length |> float)

let res = avg [ 1.; 2.; 3.; 4.; 5. ]
printfn "Average : %A" res
