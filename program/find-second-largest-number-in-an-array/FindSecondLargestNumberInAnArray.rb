puts 'Enter various numbers: '
numbers = gets.chomp.split
numbers_array = numbers.map(&:to_i)

puts ''
puts "Sorted Array: #{numbers_array.sort}"

second_max = numbers_array.uniq.sort[-2]

puts "Second Largest Number: #{second_max}"
