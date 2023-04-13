print "Enter a string: ";
str = gets.chomp;  

puts case 
when str.match(/\d/)
    "Input string contains numbers";    
when str.match(/[a-zA-Z]/)
    "Input string contains letters";    
else
    "Invalid choice";    
end
