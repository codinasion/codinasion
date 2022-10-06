puts "Enter a number : "
 number = Integer(gets.chomp)
 
 if number % 2 == 0
 puts number.to_s + " is an even number."
 else
 puts number.to_s + " is a odd number."
 end