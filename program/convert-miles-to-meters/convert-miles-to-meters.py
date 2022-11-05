conversionFactor = 1609.344

def convertMilesToMeters(miles):
    milesToMeters = miles * conversionFactor
    return milesToMeters

print(convertMilesToMeters(5))