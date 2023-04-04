use std::io;

fn main() {
    // Prompt the user to enter a weight in pounds
    println!("Enter a weight in pounds:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let pounds: f64 = input.trim().parse().expect("Invalid input");

    // Convert the weight from pounds to kilograms
    let kilograms = pounds / 2.20462;

    // Display the result
    println!("{} pounds is {:.2} kilograms", pounds, kilograms);
}
