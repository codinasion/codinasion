let celsiusToKelvin (celsius: float) =
    celsius + 273.15


let celsiusTemperature = -40.0
let kelvinTemperature = celsiusToKelvin celsiusTemperature
printfn "%f Celsius is %f Kelvin" celsiusTemperature kelvinTemperature
