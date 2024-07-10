import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

w, v = np.linalg.eig(arr)

[print(x) for x in np.round(w, decimals=4)]
