print "Enter year : \n"
year = gets.chomp.to_i
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) 
  print "#{year} is a leap year"
else
  print "#{year} is not a leap year"
end
