# frozen_string_literal: true

def find_perimeter_of_a_square(side)
  side * 4
end

if $PROGRAM_NAME == __FILE__
  print 'Side : '
  side = gets.chomp.to_i
  puts "Perimeter : #{find_perimeter_of_a_square(side)}"
end
