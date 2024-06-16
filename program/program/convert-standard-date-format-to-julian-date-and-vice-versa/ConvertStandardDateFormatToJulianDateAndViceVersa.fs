open System

// Function to convert standard date format (year, month, day) to Julian date
let toJulianDate (year : int) (month : int) (day : int) : DateTime =
    new DateTime(year, month, day)

// Function to convert Julian date to standard date format (year, month, day)
let fromJulianDate (date : DateTime) : int * int * int =
    date.Year, date.Month, date.Day

// Example usage
[<EntryPoint>]
let main argv =
    // Convert standard date format to Julian date
    let julianDate = toJulianDate 2024 4 9
    printfn "Julian date: %A" julianDate

    // Convert Julian date to standard date format
    let (year, month, day) = fromJulianDate julianDate
    printfn "Standard date format: %d-%d-%d" year month day

    0 // Return an integer exit code
