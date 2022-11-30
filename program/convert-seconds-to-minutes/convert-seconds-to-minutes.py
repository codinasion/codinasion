def convert_seconds_to_minutes(sec):
    return round(sec / 60, 2)


seconds = int(input("Input : "))
print("Output :", convert_seconds_to_minutes(seconds))
