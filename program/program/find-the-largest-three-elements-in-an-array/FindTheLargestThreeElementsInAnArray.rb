def largest_three_elements(array)
  sorted_array = array.sort.reverse
  return sorted_array[0..2]
end

puts "Enter the numbers separated by spaces:"
input = gets.chomp
numbers = input.split.map(&:to_i)

if numbers.length < 3
  puts "Please enter at least three numbers."
else
  largest = largest_three_elements(numbers)
  puts "The largest three elements in the array are: #{largest}"
end
