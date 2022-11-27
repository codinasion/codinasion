import numpy as np

matrix = np.array([[1, 2, 3], 
                   [4, 5, 6], 
                   [7, 8, 9]])

print(np.linalg.matrix_rank(matrix))  # Output: 2
