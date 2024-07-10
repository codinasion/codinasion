def calculate_average(numbers, index = 0)
  if index == numbers.length - 1
    return numbers[index].to_f
  else
    return numbers[index].to_f + calculate_average(numbers, index + 1)
  end
end

def main
  puts "Enter numbers separated by spaces:"
  input = gets.chomp
  numbers = input.split.map(&:to_i)

  if numbers.empty?
    puts "No numbers entered. Exiting program."
  else
    average = calculate_average(numbers) / numbers.length
    puts "The average of #{numbers.join(', ')} is: #{average}"
  end
end

main
