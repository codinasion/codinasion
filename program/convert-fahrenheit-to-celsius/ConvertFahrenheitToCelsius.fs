let fahrenheitToCelsius fahrenheit : float =
   (fahrenheit - 32.0) * 5.0/9.0

let celcius = fahrenheitToCelsius -40.0

printfn "Equivalent celcius : %f" celcius
