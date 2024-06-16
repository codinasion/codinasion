# program to convert celsius to kelvin

C = input("Input (C) : ")

if float(C) > -273.15:
    K = float(C) + 273.15

    print(f"Output (K) : {K}")

else:
    print("Error: Invalid value provided for Celsius")
