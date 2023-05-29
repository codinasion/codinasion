# asking for input
totalminutes = input(f"Enter the minutes: ")

# checking for only digit in input
if totalminutes.isdigit():
    # converting string type to int type
    totalminutes = int(totalminutes)

    # calculating on basis of formula
    totalSeconds = totalminutes * 60

    # printing the output
    print(f"Total time: {totalSeconds} seconds")

# user type input other than digit
else:
    print(f"Please enter valid input.")
