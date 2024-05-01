open System
open System.Globalization


let convertStringToPascalCase (s: string) =
    let myTI = CultureInfo("en-US", false).TextInfo
    myTI.ToTitleCase(s).Split(' ') |> Array.map (fun x -> x.Trim())

[<EntryPoint>]
let main argv =
    printfn "Enter a string to convert it to PascalCase: "
    let demoInput = Console.ReadLine()
    let pascalCaseString = convertStringToPascalCase demoInput |> String.concat ""
    printfn "%s" pascalCaseString
    0
