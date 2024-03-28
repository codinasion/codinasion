function celsius_to_kelvin(celsius)
    kelvin = celsius + 273.15
    return kelvin
end

celsius_temperature = -40 
kelvin_temperature = celsius_to_kelvin(celsius_temperature)
println("$celsius_temperature degrees Celsius is equal to $kelvin_temperature Kelvin.")
