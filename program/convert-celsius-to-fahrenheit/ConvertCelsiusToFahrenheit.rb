puts "Let's convert Celsius to Fahrenheit"
puts 'Insert the Celsius Temperature: '
celsius_input = gets.chomp.to_i
fahrenheit = (celsius_input * 9 / 5) + 32
puts "Temperature Converted: #{fahrenheit}"
