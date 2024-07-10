def ConvertHoursToDays(hours)
  (hours/24.0).round(1)
end

hours = 48
puts "#{hours} hours is #{ConvertHoursToDays(hours)} days"