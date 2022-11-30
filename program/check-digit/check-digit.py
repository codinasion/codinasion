# Checks if the input number
num = input("Enter a number: ")

# Solution
def checDigit(num):
    try:
        (int(num))
        return True
    except ValueError:
        return False


if checDigit(num):
    print("Digit")
else:
    print("Not Digit")
