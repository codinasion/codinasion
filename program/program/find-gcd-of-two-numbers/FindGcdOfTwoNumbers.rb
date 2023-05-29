puts "Please enter the first number to check greatest common divisor: "
first_number = gets.to_i
puts "Please enter the second number to check greatest common divisor: "
second_number = gets.to_i

def findGCDOfTwoNumbers(num1, num2)
    result = num1.gcd(num2)
    puts "The greatest common divisor is #{result}"
end

findGCDOfTwoNumbers(first_number, second_number)