def weekendDays(year)
  year * 104
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the number of years : '
  year = gets.chomp.to_i

  puts "#{year} year has #{weekendDays(year)} weekends"
end
