require 'time'

puts "Add a 24h format time (hh:mm:ss): "
hour = gets.chomp

puts Time.strptime(hour, "%H:%M:%S").strftime('%l:%M:%S %p')
