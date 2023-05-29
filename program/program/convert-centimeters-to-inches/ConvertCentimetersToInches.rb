# frozen_string_literal: true

def convertCentimetersToInches(centimeters)
  inches = centimeters / 2.54
  inches.to_i == inches ? inches.to_i : inches.round(2)
end

if $PROGRAM_NAME == __FILE__
  print 'Input  : '
  centimeters = gets.chomp.to_f
  inches = convertCentimetersToInches(centimeters)
  puts "Output : #{inches}"
end
