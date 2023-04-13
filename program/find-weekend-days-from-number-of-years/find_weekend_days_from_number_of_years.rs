use std::io;

fn main() {
    // Read input from user
    println!("Enter the number of years:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");
    let years: i32 = input.trim().parse().expect("Invalid input");

    // Calculate number of weekends
    let weekends = years * 104;

    // Display output
    println!("Number of weekend days in {} years: {}", years, weekends);
}