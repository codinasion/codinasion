let input = [ 10; 4; 3; 50; 23; 90 ]

let sort = List.sortDescending input

for i = 0 to 2 do
    printfn "%d" sort.[i]
