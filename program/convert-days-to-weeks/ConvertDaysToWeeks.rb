def daysToWeeks(days)
  days / 7
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the days : '
  days = gets.chomp.to_i

  puts "#{days} days is #{daysToWeeks(days)} weeks"
end
