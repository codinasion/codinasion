use std::io;

fn main() {
    println!("Enter a number:");
    let mut n = String::new();
    io::stdin().read_line(&mut n).expect("Failed to read input.");
    let n: u32 = n.trim().parse().expect("Please enter a valid number.");

    let sum = n * (n + 1) / 2;

    println!("The sum of the first {} natural numbers is {}", n, sum);
}
