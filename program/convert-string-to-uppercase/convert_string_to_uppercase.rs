/*
 * Program: Convert string to uppercase
 * Author: Manan Karnik
 * Date: 13/10/2022
 */

use std::io::{self, Write};

fn main() {
    // String to store input
    let mut input_text = String::new();
    print!("Enter string: ");
    io::stdout().flush().unwrap();

    // Accept input
    io::stdin()
        .read_line(&mut input_text)
        .expect("Failed to read line");

    // Print result
    println!("String converted to uppercase: {}", input_text.to_uppercase());
}
