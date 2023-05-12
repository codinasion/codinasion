use ndarray::{Array1, Array2};
use ndarray_linalg::Eigen;

fn main() {
    // Read the matrix from standard input
    let mut input = String::new();
    std::io::stdin().read_line(&mut input).unwrap();
    let matrix: Array2<f64> = input.trim().split(';')
        .map(|row| row.trim().split(' ')
            .map(|val| val.parse().unwrap())
            .collect::<Vec<f64>>())
        .collect::<Vec<Vec<f64>>>()
        .into_iter()
        .map(|row| row.into_iter().collect::<Array1<f64>>())
        .collect::<Array2<f64>>();

    // Calculate the eigenvalues
    let eigenvalues = matrix.eigvals().unwrap();

    // Print the eigenvalues to standard output
    for (i, &value) in eigenvalues.iter().enumerate() {
        println!("Eigenvalue {}: {}", i, value);
    }
}
