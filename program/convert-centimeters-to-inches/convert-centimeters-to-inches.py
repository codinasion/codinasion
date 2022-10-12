#ISSUE #3412
def centimetersToInch(centimeters):
    return centimeters/2.54

centimeters = 12.7
print(('Input: '+str(centimeters) + " {oneOrMore}").format(oneOrMore="centimeter" if centimeters == 1 else "centimeters"))
result = centimetersToInch(centimeters)
print(('Output: '+str(result) + " {oneOrMore}").format(oneOrMore="inch" if result == 1 else "inches"))