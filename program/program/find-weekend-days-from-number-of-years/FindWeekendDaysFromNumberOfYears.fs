let findWeekendDays (years: int) =
    let totalWeekends = years * 104
    printfn "Total weekend days in %d years: %d" years totalWeekends

findWeekendDays 1 // replace 1 with any number of years you want to calculate for
