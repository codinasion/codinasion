func fahrenheitToKelvin(fahrenheit: Double) -> Double {
    let kelvin = (fahrenheit + 459.67) * 5/9
    return kelvin
}

print("Enter temperature in Fahrenheit: ")
if let input = readLine(), let fahrenheit = Double(input) {
    let kelvin = fahrenheitToKelvin(fahrenheit: fahrenheit)
    print("Temperature in Kelvin: \(kelvin)")
} else {
    print("Invalid input. Please enter a valid temperature in Fahrenheit.")
}
