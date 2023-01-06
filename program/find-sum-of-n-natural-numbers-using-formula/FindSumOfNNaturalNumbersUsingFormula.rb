def sumOfNaturalNumber(num)
  num * (num+1)/2
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter a Number : '
  num = gets.chomp.to_i

  puts "Sum of Natural Number : #{sumOfNaturalNumber(num)}"
end
