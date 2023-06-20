#Function to convert minutes to days
def minutes_to_days(minutes)
    days = minutes / 1440
    return days
end
  
#Asks for user input
puts "Enter the number of minutes: "
minutes = gets.chomp.to_f

#Calls function to convert the user input
converted_days = minutes_to_days(minutes)
#Prints the input and output
puts "Input: #{minutes}"
puts "Output: #{converted_days}"