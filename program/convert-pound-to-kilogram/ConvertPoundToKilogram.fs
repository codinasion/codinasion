let poundsToKilograms (pounds: float) =
    let kilograms = pounds * 0.453592
    printfn "%f pounds is equal to %f kilograms" pounds kilograms

let main () =
    printfn "Enter a weight in pounds: "
    let input = System.Console.ReadLine()
    match float.TryParse(input) with
    | true, pounds -> poundsToKilograms pounds
    | _ -> printfn "Invalid input"

main()
