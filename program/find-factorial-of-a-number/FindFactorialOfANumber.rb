puts "Please enter a number: "
input_number = gets.to_i

def findFactorialOfANumber number
    factorial = 1

    (2..number).each do |x|
        factorial *= x
    end

    "The factorial of #{number} is #{factorial}"
end

puts findFactorialOfANumber input_number