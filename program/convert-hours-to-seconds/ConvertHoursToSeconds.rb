def hoursToSeconds(hours)
  hours * 3600
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the hours : '
  hours = gets.chomp.to_i

  puts "#{hours} hours is #{hoursToSeconds(hours)} seconds"
end
