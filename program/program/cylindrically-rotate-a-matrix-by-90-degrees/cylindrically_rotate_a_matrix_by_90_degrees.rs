fn rotate_matrix(matrix: Vec::<Vec<u32>>) -> Vec::<Vec<u32>> {
    let mut rotated: Vec::<Vec<u32>> = Vec::new();

    for i in 0 .. matrix.len() {
        let mut row: Vec::<u32> = Vec::new();
        for j in (0 .. matrix.len()).rev() {
            row.push(matrix[j][i]);
        }
        rotated.push(row);
    }

    rotated
}

fn main() {
    let matrix: Vec::<Vec<u32>> = vec![
        vec![1, 2, 3],
        vec![4, 5, 6],
        vec![7, 8, 9]
    ];

    let matrix = rotate_matrix(matrix);

    for row in matrix {
        row.iter().for_each(|i| print!("{} ", i));
        println!("");
    }
}