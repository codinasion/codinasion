puts "Please enter principal: "
principal_input = gets.to_f
puts "Please enter rate: "
rate_input = gets.to_f
puts "Please enter time: "
time_input = gets.to_f

def calculateCompoundInterest principal, rate, time
    (principal * (1+(rate/100))**time).round(2)
end

puts calculateCompoundInterest(principal_input, rate_input, time_input)
