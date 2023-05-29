full_hour = input()

hour, minute, second = full_hour.split(":")
hour = int(hour)
if hour >= 0 and hour < 12:
    period = "AM"
elif hour > 12 and hour <= 23:
    hour -= 12
    period = "PM"
elif hour == 24:
    hour = 0
    period = "AM"
elif hour == 12:
    period = "PM"

print(f"{hour}:{minute}:{second}{period}")
