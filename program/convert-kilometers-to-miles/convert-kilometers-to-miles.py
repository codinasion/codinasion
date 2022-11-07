def km_to_miles(value_in_km):
    return round(value_in_km / 1.609, 2)

print("Miles:\n", km_to_miles(float(input("Kilometers: "))))
