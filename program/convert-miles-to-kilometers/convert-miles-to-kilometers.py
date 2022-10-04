# asking for input
distancemiles = input(f"Enter the distance(in miles):")
totaldistance = 0.0
distancekilometer = 0.0

# checking for only digit in input
if distancemiles.isdigit():
    # converting string type to floating type
    distancemiles = float(distancemiles)
    # calculating on basis of formula
    distancekilometer = (distancemiles * 1.609)
    # printing the output
    print(f"Distance in kilometer is: {distancekilometer} km")

# user type input other than digit
else:
    print(f"Please enter valid input.")