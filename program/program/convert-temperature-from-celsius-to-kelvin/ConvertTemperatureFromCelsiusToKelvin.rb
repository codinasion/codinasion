def celsius_to_kelvin(celsius)
  k = celsius + 273.15
  return k
end

celsius = -40
kelvin = celsius_to_kelvin(celsius)

puts "Input (C): #{celsius}"
puts "Output (K): #{kelvin}"
