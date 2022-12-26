# --------- Program to convert meters to miles ---------#

# Covert meters to miles (1 mile = 1609 meters)
def metersToMiles(meter_value):
    return int(meter_value // 1609)


# User input
input_in_meters = float(input("Input  : "))
output_in_miles = metersToMiles(input_in_meters)
print("Output :", output_in_miles)
