using LinearAlgebra
arr = [1 2 3; 4 5 6; 7 8 9]
data = eigen(arr)
print(data.values)