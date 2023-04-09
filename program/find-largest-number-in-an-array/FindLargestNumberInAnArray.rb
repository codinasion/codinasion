puts 'Enter various numbers: '
numbers = gets.chomp.split
numbers_array = numbers.map(&:to_i)
puts ''
puts "Sorted Array: #{numbers_array.sort}"
puts "Max Number: #{numbers_array.max}"
