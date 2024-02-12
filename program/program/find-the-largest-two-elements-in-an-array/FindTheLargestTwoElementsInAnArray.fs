let input = [ 12; 13; 1; 10; 34; 1]

let sort = List.sortDescending input

for i = 0 to 1 do
    printfn "%d" sort.[i]
