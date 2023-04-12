def poundToKilogram(pounds)
  pounds * 0.453592
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the pounds : '
  pounds = gets.chomp.to_i

  puts "#{pounds} pounds is #{poundToKilogram(pounds)} kilogram"
end
