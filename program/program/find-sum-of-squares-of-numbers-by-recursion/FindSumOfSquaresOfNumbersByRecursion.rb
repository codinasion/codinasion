# frozen_string_literal: true

puts 'This program calculates the sum of squares of numbers.'
puts 'Enter the numbers separated by spaces'

input_array = gets.chomp.split(' ').map(&:to_i)

puts "Sum of squares is #{input_array.sum { |num| num * num }}"
