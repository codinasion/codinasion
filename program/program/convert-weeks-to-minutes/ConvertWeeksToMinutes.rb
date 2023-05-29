puts "Enter number or weeks: "
num_of_weeks = gets.chomp.to_i

total_minutes = num_of_weeks * 10080

puts "Total Minutes in " + num_of_weeks.to_s + " weeks is " + total_minutes.to_s