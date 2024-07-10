fn main() {
    let mat = vec![vec![1,2,3],
                  vec![4,5,6],
                  vec![7,8,9],
                  ];
    let mut sum = 0;
    let rows = mat[0].len();
    for i in 0..rows {
        sum += mat[i][i];         
    }
    println!("{sum}");
}