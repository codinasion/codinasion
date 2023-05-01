let fahrenheitToKelvin fahrenheit : float =
  (fahrenheit-32.0) * 0.56 + 273.15

let kelvin = fahrenheitToKelvin 1.0

printfn "Equivalent value in kelvin : %f" kelvin
