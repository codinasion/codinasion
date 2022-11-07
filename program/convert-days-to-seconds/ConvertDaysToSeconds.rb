def convert_days_to_seconds(days = 5) 
  hours = 24
  minutes = 60
  seconds = 60
  seconds_in_day = hours * minutes * seconds
  return (seconds_in_day * days).round()
end
