# frozen_string_literal: true

puts 'This program calculates the power of a number.'
print 'Enter the base number: '
num1 = gets.chomp.to_i
print 'Enter the power or exponent: '
num2 = gets.chomp.to_i

def power(num1, num2)
  return 'Power/exponent cannot be negative' if num2.negative?
  return 1 if num2.zero?

  num1 * power(num1, num2 - 1)
end

puts "#{num1}^#{num2} = #{power(num1, num2)}"
