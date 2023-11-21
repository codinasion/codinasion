fn main() {
    // Define the input matrix
    let matrix: [[i32; 3]; 3] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    // Calculate and print the adjoint of the matrix
    let adjoint_matrix = adjoint(&matrix);
    print_adjoint_matrix(&adjoint_matrix);
}

fn adjoint(matrix: &[[i32; 3]; 3]) -> [[i32; 3]; 3] {
    let mut adjoint_matrix: [[i32; 3]; 3] = [[0; 3]; 3];

    for i in 0..3 {
        for j in 0..3 {
            // Calculate the cofactor for each element
            let cofactor_value = cofactor(matrix, i, j);

            // Transpose the cofactor matrix to get the adjoint matrix
            adjoint_matrix[j][i] = cofactor_value;
        }
    }

    adjoint_matrix
}

fn cofactor(matrix: &[[i32; 3]; 3], row: usize, col: usize) -> i32 {
    // Calculate the minor matrix by excluding the current row and column
    let mut minor_matrix: [[i32; 2]; 2] = [[0; 2]; 2];
    let mut minor_row = 0;
    for i in 0..3 {
        if i == row {
            continue;
        }
        let mut minor_col = 0;
        for j in 0..3 {
            if j == col {
                continue;
            }
            minor_matrix[minor_row][minor_col] = matrix[i][j];
            minor_col += 1;
        }
        minor_row += 1;
    }

    // Calculate the determinant of the minor matrix
    let minor_det = (minor_matrix[0][0] * minor_matrix[1][1]) - (minor_matrix[0][1] * minor_matrix[1][0]);

    // Apply the sign based on the position of the element in the matrix
    let sign = if (row + col) % 2 == 0 { 1 } else { -1 };

    // Multiply the determinant by the sign to get the cofactor
    sign * minor_det
}

fn print_adjoint_matrix(matrix: &[[i32; 3]; 3]) {
    print!("[");
    for row in matrix.iter().take(matrix.len() - 1) {
        print!("{}, ", format_row(row));
    }
    print!("{}]", format_row(matrix.last().unwrap()));
}

fn format_row(row: &[i32; 3]) -> String {
    format!("[{}]", row.iter().map(|&x| x.to_string()).collect::<Vec<_>>().join(", "))
}
