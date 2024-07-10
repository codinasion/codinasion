use std::fmt;

#[derive(Debug, Clone)]
struct Matrix {
    rows: Vec<Vec<i32>>,
}

impl fmt::Display for Matrix {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for x in self.rows.iter() {
            for y in x.iter() {
                write!(f, " {} ", y)?;
            }
            write!(f, "\n")?;
        }
        write!(f, "")
    }
}

impl PartialEq for Matrix {
    fn eq(&self, other: &Self) -> bool {
        self.rows == other.rows
    }
}

impl Eq for Matrix {}

impl Matrix {

    fn empty() -> Matrix {
        Matrix { rows: vec![] }
    }

    fn check_add_comparable(m1: &Self, m2: &Self) -> bool {
        if m1.rows.len() != m2.rows.len() { return false; }
        for (row_index, row) in m1.rows.iter().enumerate() {
            if row.len() != m2.rows[row_index].len() { return false; }
        }
        return true;
    }

    fn add(m1: &Self, m2: &Self) -> Option<Matrix> {
        if !Matrix::check_add_comparable(&m1, &m2) {
            println!("Matrices are of inequal size! Aborting...");
            return None;
        }
        let mut new = Matrix {rows: vec![]};
        for (row_index, row) in m1.rows.iter().enumerate() {
            let mut new_row = vec![];
            for (col_index, col_elm) in row.iter().enumerate() {
                new_row.push(col_elm + m2.rows[row_index][col_index]);
            }
            new.rows.push(new_row);
        }
        return Some(new);
    }
}

fn main() {
    let m1 = Matrix { rows: vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]] };
    let m2 = Matrix { rows: vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]] };
    let m3 = Matrix::add(&m1, &m2).unwrap_or(Matrix::empty());

    println!("Input:\n{}\n{}\nOutput:\n{}", m1, m2, m3);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_correct_addition() {
        let m1 = Matrix { rows: vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]] };
        let m2 = Matrix { rows: vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]] };
        let expected = Matrix { rows: vec![vec![2, 4, 6], vec![8, 10, 12], vec![14, 16, 18]] };

        let result = Matrix::add(&m1, &m2).unwrap_or(Matrix::empty());

        assert_eq!(result, expected);
    }

    #[test]
    fn test_unequal_cols_size_matrices() {
        let m1 = Matrix { rows: vec![vec![1, 2], vec![3, 4]] };
        let m2 = Matrix { rows: vec![vec![5, 6, 7], vec![8, 9, 10]] };

        let result = Matrix::add(&m1, &m2);

        assert!(result.is_none());
    }
    
    #[test]
    fn test_unequal_rows_size_matrices() {
        let m1 = Matrix { rows: vec![vec![1, 2], vec![3, 4]] };
        let m2 = Matrix { rows: vec![vec![5, 6]] };

        let result = Matrix::add(&m1, &m2);

        assert!(result.is_none());
    }

    #[test]
    fn test_empty_matrices() {
        let m1 = Matrix::empty();
        let m2 = Matrix::empty();
        let expected = Matrix::empty();

        let result = Matrix::add(&m1, &m2).unwrap();

        assert_eq!(result, expected);
    }


    // You can add more test cases as needed...
}
