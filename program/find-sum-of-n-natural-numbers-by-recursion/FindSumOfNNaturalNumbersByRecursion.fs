open System
let rec sum last first=
        if last = 0 then first
        else  sum (last-1)(last+first)
let result = sum 5 0
Console.WriteLine("The sum of first 5 integers is {0}\t", result)
