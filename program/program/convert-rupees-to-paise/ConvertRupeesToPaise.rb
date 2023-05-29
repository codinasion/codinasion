def rupeesToPaise(rupees)
  rupees * 100
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the rupees : '
  rupees = gets.chomp.to_i

  puts "#{rupees} rupee is #{rupeesToPaise(rupees)} paisa"
end
