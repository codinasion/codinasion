func celsiusToKelvin(_ celsius: Double) -> Double {
    let kelvin = celsius + 273.15
    return kelvin
}

let celsiusTemperature = -40
let kelvinTemperature = celsiusToKelvin(celsiusTemperature)
print("\(celsiusTemperature) degrees Celsius is equal to \(kelvinTemperature) Kelvin.")
