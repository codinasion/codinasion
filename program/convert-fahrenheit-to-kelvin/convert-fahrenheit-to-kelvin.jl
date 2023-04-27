println("Enter temperature in Fahrenheit:")
fahrenheit = parse(Float64, readline())

if isnan(fahrenheit)
    println("Invalid input. Please enter a valid number.")
else
    kelvin = (fahrenheit - 32) * 5/9 + 273.15
    println("Temperature in Kelvin: $kelvin")
end
