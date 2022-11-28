#Author: suryapoojary0
#Date: "13-10-2022"

puts "Input a digit to check if it's a digit"

#check_digit function checks if the num is a digit or not a digit.

num = gets.to_i

def check_digit(num)

	unless num >= 10 
		puts "Digit"
	else
		puts "Not a Digit"
	end
end

#call thr function

check_digit(num)
