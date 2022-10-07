use std::io::{self, Write};

fn main() {
    let mut fibonacci: Vec<i32> = Vec::new();

    let mut input = String::new();

    print!("Input  : ");
    io::stdout().flush().unwrap();

    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");

    let input: usize = input.trim().parse().expect("Please type a number");

    fibonacci.push(0);
    fibonacci.push(1);

    for i in 2..input {
        let next = &fibonacci[i - 1] + &fibonacci[i - 2];
        fibonacci.push(next);
    }

    print!("Output : ");
    io::stdout().flush().unwrap();

    for i in 0..input {
        print!("{} ", fibonacci[i]);
        io::stdout().flush().unwrap();
    }
}
