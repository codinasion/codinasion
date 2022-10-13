# frozen_string_literal: true

def check_leap_year(year)
  is_leap_year = false
  if (year % 400).zero?
    is_leap_year = true
  elsif year % 100 != 0 && (year % 4).zero?
    is_leap_year = true
  end
  is_leap_year ? 'Leap Year' : 'Not a Leap Year'
end

if $PROGRAM_NAME == __FILE__
  print 'Input  : '
  year = gets.chomp.to_i
  puts "Output : #{check_leap_year(year)}"
end
