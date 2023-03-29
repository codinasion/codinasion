def minutesToWeeks(minutes)
  minutes / 10080
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the minutes : '
  minutes = gets.chomp.to_i

  puts "#{minutes} minutes is #{minutesToWeeks(minutes)} weeks"
end
