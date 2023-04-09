require 'active_support/inflector'

def weeksToDays weeks
    days = weeks * 7
    weeks.to_s + " week".pluralize(weeks) + " is " + days.to_s + " days"
end

puts weeksToDays 1

