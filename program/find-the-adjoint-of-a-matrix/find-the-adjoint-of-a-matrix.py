from typing import List
import numpy as np


def compute_adjoint_matrix(matrix: List[List[int]]) -> np.ndarray:
    n_lines = len(matrix)
    n_columns = len(matrix[0])
    cofactor_matrix = np.array([])
    if n_lines != n_columns:
        print("Input a square matrix!")
        return
    for line in range(n_lines):
        for column in range(n_columns):
            minor_matrix = []
            for minor_line in matrix:
                minor_line_copy = minor_line.copy()
                minor_line_copy.pop(column)
                minor_matrix.append(minor_line_copy)
            minor_matrix.pop(line)
            cofactor_matrix = np.append(
                cofactor_matrix, (-1) ** (line + column) * np.linalg.det(minor_matrix)
            )

    return cofactor_matrix.reshape((n_lines, n_columns)).T


print(compute_adjoint_matrix([[1, 2, 3], 
                              [4, 5, 6], 
                              [7, 8, 9]]))

""" Output:
[[ -3.   6.  -3.]
 [  6. -12.   6.]
 [ -3.   6.  -3.]]
"""