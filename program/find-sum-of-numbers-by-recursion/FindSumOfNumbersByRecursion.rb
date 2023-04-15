puts "Add the numbers you want to sum using recursion"
input = gets.chomp
numbers = input.split(" ").map(&:to_i)

def sum_of_numbers(numbers)
  if numbers == []
    0
  else
    numbers[0] + sum_of_numbers(numbers[1..-1])
  end
end

puts "Sum: #{sum_of_numbers(numbers)}"
