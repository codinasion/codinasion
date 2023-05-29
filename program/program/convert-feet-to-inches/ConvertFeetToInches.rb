puts "Please enter feet"

feet = gets.to_f
inches = feet * 12

puts inches.round(2).to_s.sub(/\.?0+$/, '').to_s + " inches"