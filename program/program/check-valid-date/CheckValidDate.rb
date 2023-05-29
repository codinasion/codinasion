# frozen_string_literal: true

require 'date'

def check_valid_date(date)
  Date.parse(date)
  true
rescue ArgumentError
  false
end

if $PROGRAM_NAME == __FILE__
  print 'Input  : '
  date = gets.chomp
  # Match the regular expression for a date
  if date =~ /\d{4}-\d{2}-\d{2}/
    puts "Output : #{check_valid_date(date)}"
  else
    puts 'Output : Invalid date. Date must be in the format YYYY-MM-DD.'
  end
end
