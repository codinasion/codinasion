use std::io::{self, Write};

fn main() {
    print!("Input: ");
    io::stdout().flush().expect("flush failed!");

    let mut input = String::new();
    match io::stdin().read_line(&mut input) {
        Ok(_) => (),
        Err(err) => println!("Could not read input: {}", err),
    }

    match input.trim().parse::<i32>() {
        Ok(n) => print_multi_table(n),
        Err(_) => println!("Input is not a valid number."),
    }
}

fn print_multi_table(n: i32) {
    let mut i = 1;
    while i <= 10 {
        println!("{n} x {i} = {result}", n = n, i = i, result = n * i);
        i += 1;
    }
}
