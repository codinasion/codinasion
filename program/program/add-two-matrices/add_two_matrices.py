def get_matrix_input(rows, cols):
    """Function to get matrix input from the user."""
    matrix = []
    print(f"Enter the elements for a {rows}x{cols} matrix:")
    for i in range(rows):
        row = []
        for j in range(cols):
            # Prompt for each element in the row
            value = float(input(f"Enter element [{i+1}][{j+1}]: "))
            row.append(value)
        matrix.append(row)
    return matrix

def add_matrices(matrix1, matrix2):
    """Function to add two matrices."""
    return [[matrix1[i][j] + matrix2[i][j] for j in range(len(matrix1[0]))] for i in range(len(matrix1))]

def print_matrix(matrix):
    """Function to print the matrix."""
    for row in matrix:
        print(" ".join(map(str, row)))

def main():
    rows = int(input("Enter the number of rows for the matrices: "))
    cols = int(input("Enter the number of columns for the matrices: "))

    print("Matrix 1:")
    matrix1 = get_matrix_input(rows, cols)
    print("Matrix 2:")
    matrix2 = get_matrix_input(rows, cols)

    # Adding the matrices
    result_matrix = add_matrices(matrix1, matrix2)
    print("Result of adding Matrix 1 and Matrix 2:")
    print_matrix(result_matrix)

if __name__ == "__main__":
    main()
