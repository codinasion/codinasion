require 'prime'

def printAllPrimeNumbersBetweenTwoNumbers num1, num2
    (num1..num2).to_a.filter {|num| num.prime?}.join(" ")
end

puts printAllPrimeNumbersBetweenTwoNumbers(10,20)