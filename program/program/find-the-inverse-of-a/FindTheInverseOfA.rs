fn inverse(matrix: &Vec<Vec<f64>>) -> Option<Vec<Vec<f64>>> {
    let det = matrix_determinant(matrix);
    if det == 0.0 {
        return None;
    }

    let adj = matrix_adjoint(matrix);
    let inv: Vec<Vec<f64>> = adj
        .iter()
        .map(|row| row.iter().map(|&x| x / det).collect())
        .collect();

    Some(inv)
}

fn matrix_determinant(matrix: &Vec<Vec<f64>>) -> f64 {
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[0][2];
    let d = matrix[1][0];
    let e = matrix[1][1];
    let f = matrix[1][2];
    let g = matrix[2][0];
    let h = matrix[2][1];
    let i = matrix[2][2];

    a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
}

fn matrix_adjoint(matrix: &Vec<Vec<f64>>) -> Vec<Vec<f64>> {
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[0][2];
    let d = matrix[1][0];
    let e = matrix[1][1];
    let f = matrix[1][2];
    let g = matrix[2][0];
    let h = matrix[2][1];
    let i = matrix[2][2];

    let cofactor_matrix: Vec<Vec<f64>> = vec![
        vec![e * i - f * h, c * h - b * i, b * f - c * e],
        vec![f * g - d * i, a * i - c * g, c * d - a * f],
        vec![d * h - e * g, b * g - a * h, a * e - b * d],
    ];

    transpose_matrix(&cofactor_matrix)
}

fn transpose_matrix(matrix: &Vec<Vec<f64>>) -> Vec<Vec<f64>> {
    if matrix.is_empty() {
        return matrix.clone();
    }

    let mut transposed_matrix = vec![vec![0.0; matrix.len()]; matrix[0].len()];

    for (i, row) in matrix.iter().enumerate() {
        for (j, &element) in row.iter().enumerate() {
            transposed_matrix[j][i] = element;
        }
    }

    transposed_matrix
}

fn main() {
    let matrix: Vec<Vec<f64>> = vec![
        vec![2.0, -1.0, 0.0],
        vec![-1.0, 2.0, -1.0],
        vec![0.0, -1.0, 2.0],
    ];

    if let Some(inverse_matrix) = inverse(&matrix) {
        println!("Inverse of the matrix:");
        for row in inverse_matrix.iter() {
            println!("{:?}", row);
        }
    } else {
        println!("The matrix doesn't have an inverse.");
    }
}
