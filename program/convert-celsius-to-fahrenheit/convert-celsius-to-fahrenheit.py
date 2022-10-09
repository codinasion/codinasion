# program to convert celsius to fahrenheit

C = input("Input ( C )  : ")

if (float(C) > -273.15):
    
    F = ((float(C)*(9/5)) + 32)

    f = '{0:.3g}'.format(F)

    print(f"Output ( F )  : {f}")
    
else:

    print("Error: Invalid value provided for Celsius")