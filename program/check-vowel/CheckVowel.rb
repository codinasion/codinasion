#Author: suryapoojary0
#date: "13-10-2022"                             
puts "Input a letter in uppercase or smallcase" 
crux = ["a", "e" , "i", "o", "u", "A", "E", "I", "O", "U"]

num = gets.strip

if crux.include?(num) then
        puts "Vowel"
else                                                    puts "Not a Vowel"
end
