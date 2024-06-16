require 'date'

def standard_date_to_julian(standard_date)
  date = Date.parse(standard_date)
  year = date.year % 100
  day_of_year = date.yday
  sprintf("%02d-%03d", year, day_of_year)
end

def julian_to_standard_date(julian_date)
  year, day_of_year = julian_date.split('-').map(&:to_i)
  date = Date.new((2000 + year), 1, 1) + day_of_year - 1
  date.strftime("%Y-%m-%d")
end

# Test the conversion functions
puts "Convert standard date format to Julian date:"
standard_date = "2022-04-01"
julian_date = standard_date_to_julian(standard_date)
puts "#{standard_date} => #{julian_date}"

puts "\nConvert Julian date to standard date format:"
julian_date_input = "22-091"
standard_date_output = julian_to_standard_date(julian_date_input)
puts "#{julian_date_input} => #{standard_date_output}"
