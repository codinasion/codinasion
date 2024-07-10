/*
 * Program: Find perimeter of a square
 * Author: Manan Karnik
 * Date: 13/10/2022
 */

use std::io::{self, Write};

fn main() {
    // String to store input
    let mut input_text = String::new();
    print!("Enter side of square: ");
    io::stdout().flush().unwrap();

    // Accept input
    io::stdin()
        .read_line(&mut input_text)
        .expect("Failed to read line");

    // Parse input to f32
    let side: f32 = input_text.trim().parse().expect("Input is not a number");

    // Print result
    println!("The perimeter of a square with side length {} is {}", side, side * 4.0);    
}
