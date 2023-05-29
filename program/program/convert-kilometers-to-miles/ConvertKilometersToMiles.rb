def kilometerToMiles(km)
  km / 1.609
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the Kilometer : '
  km = gets.chomp.to_i

  puts "#{km} kilometer is #{kilometerToMiles(km)} miles"
end
