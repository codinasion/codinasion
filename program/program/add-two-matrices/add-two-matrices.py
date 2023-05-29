import numpy as np

a = np.arange(1, 10).reshape((3, 3))
b = np.arange(1, 10).reshape((3, 3))
c = np.add(a, b)
print(c)
