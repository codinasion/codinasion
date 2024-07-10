fn print_diamond_pattern(num_rows: usize) {
    // Print upper part of the diamond
    for i in 1..=num_rows {
        for _ in 0..(num_rows - i) {
            print!(" ");
        }

        for _ in 1..=(2 * i - 1) {
            print!("*");
        }

        println!();
    }

    // Print lower part of the diamond
    for i in (1..num_rows).rev() {
        for _ in 0..(num_rows - i) {
            print!(" ");
        }

        for _ in 1..=(2 * i - 1) {
            print!("*");
        }

        println!();
    }
}

fn main() {
    let num_rows = 4;
    
    print_diamond_pattern(num_rows);
}
