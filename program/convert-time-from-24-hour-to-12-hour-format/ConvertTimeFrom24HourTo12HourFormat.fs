let convertTo12HourFormat (time : string) =
    let parts = time.Split(':')
    let hour = int parts.[0]
    let minute = parts.[1]
    let second = parts.[2]
    let meridiem = 
        if hour < 12 then "AM"
        else "PM"
    let hourIn12HourFormat = 
        if hour = 0 then 12
        elif hour > 12 then hour - 12
        else hour
    sprintf "%d:%s:%s%s" hourIn12HourFormat minute second meridiem

let conversion = convertTo12HourFormat "12:05:45"
printfn "%s" conversion
