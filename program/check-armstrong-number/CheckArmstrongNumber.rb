#!/usr/bin/ruby
def isArmstrong( number )
    result = false
    numberOfDigits = number.to_s.length
    sum = 0
    n = number
    while n > 0
        digit = n % 10
        sum += digit ** numberOfDigits # ** pow
        n /= 10
    end
    result = sum == number
    return result
end

numbers = [123, 6, 1634, 2328]

for number in numbers
    puts "#{number} is an Armstrong number? #{isArmstrong(number)}"
end