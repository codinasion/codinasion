def simple_interest(principal , interest , time)
  (principal * interest * time) / 100
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the Principal amount : '
  principal = gets.chomp.to_i
  print 'Please enter the Rate of Interest : '
  interest = gets.chomp.to_i
  print 'Please enter the Time : '
  time = gets.chomp.to_i
  puts "Simple Interest : #{simple_interest(principal , interest , time)}"
end
