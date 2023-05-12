def find_minimum_of_n_numbers(numbers)
  sorted_numbers = numbers.sort
  # many methods to get it:
  # sorted_numbers[0]
  # sorted_numbers.first
  sorted_numbers.min
end

puts find_minimum_of_n_numbers([300, 50, 10, 2, 20, 34, 45])
