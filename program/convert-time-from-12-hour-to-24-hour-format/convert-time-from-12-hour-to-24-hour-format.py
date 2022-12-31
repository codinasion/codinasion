full_hour = input()
period = full_hour[-2:]

if period == "AM":
    print(full_hour[:-2])
elif period == "PM":
    hour, minute, second = full_hour.split("PM")[0].split(":")
    hour = int(hour)
    if hour + 12 != 24:
        hour += 12
    print(f"{hour}:{minute}:{second}")
