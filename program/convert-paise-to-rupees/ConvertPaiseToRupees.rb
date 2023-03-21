def paisaToRupees(paisa)
  paisa / 100
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the paisa : '
  paisa = gets.chomp.to_i

  puts "#{paisa} paisa is #{paisaToRupees(paisa)} rupees"
end
