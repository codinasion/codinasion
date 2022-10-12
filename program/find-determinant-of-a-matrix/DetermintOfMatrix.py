from array import ArrayType
import numpy as np


def create_line(i: int) -> ArrayType:
    line_i = input(f"Line {i}: ").split()
    return np.array(line_i, dtype=float)


n = int(input("Matrix Dimension: "))
matrix = [create_line(i) for i in range(n)]

print(np.linalg.det(matrix))
