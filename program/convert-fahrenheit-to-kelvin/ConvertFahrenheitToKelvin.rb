puts "Let's convert Fahrenheit to Kelvin"
puts 'Insert the Fahrenheit temperature'
fahrenheit_input = gets.chomp.to_f
kelvin = (fahrenheit_input + 459.67) * 5/9
puts "Temperature converted: #{kelvin}"
