import numpy as np

matrix = np.array([[1, 2, 3], 
                   [4, 5, 6], 
                   [7, 8, 9]])

eig_value, eig_vector = np.linalg.eig(matrix)

print(eig_vector)

"""Output
[[-0.23197069 -0.78583024  0.40824829]
 [-0.52532209 -0.08675134 -0.81649658]
 [-0.8186735   0.61232756  0.40824829]
"""
