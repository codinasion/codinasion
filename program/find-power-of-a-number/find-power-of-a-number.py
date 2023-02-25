# Program for finding the power of number

# Input a- number , n-power
# Output a^n

import math

a, n = list(map(float, input().split()))

print(round(math.pow(a, n), 3))
