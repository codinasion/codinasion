matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

rows = len(matrix)
columns = len(matrix[0])

transposed_matrix = [[0 for x in range(rows)] for y in range(columns)]

for i in range(columns):
    for j in range(rows):
        transposed_matrix[i][j] = matrix[j][i]

for i in range(columns):
    for j in range(rows):
        print(transposed_matrix[i][j], " ", end="")
    print()
