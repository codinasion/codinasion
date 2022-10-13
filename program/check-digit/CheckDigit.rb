#Author: suryapoojary0
#Date:	 13-10-2022

#Ask for input 

puts "Input a number to check if it's a digit"

num = gets.to_i

#check_digit function will check if num is a digit or not a digit.

def check_digit(number)
	unless number >= 10
		puts "Digit"
	else
		puts "Not a Digit"
	end
end

check_digit(num)
