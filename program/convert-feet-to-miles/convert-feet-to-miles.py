print(
    "Python program to convert feet to miles \n 1 mile = 5280 feet"
)


def feetToMiles(num):
    return num / 5280


feet = 26400
miles = feetToMiles(feet)
print(f"Input  : {feet}")
print(f"Output : {miles}")
