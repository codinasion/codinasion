def celsius_to_fahrenheit(celsius)
  celsius * 9 / 5 + 32
end

puts 'Enter Celsius value:'
celsius = gets.to_f
puts "#{celsius_to_fahrenheit(celsius)} °F"
