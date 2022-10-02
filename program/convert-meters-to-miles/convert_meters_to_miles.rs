use std::io;
use std::process;

fn main() {
    let mut input = String::new();
    println!("Please enter meters: ");
    io::stdin().read_line(&mut input).unwrap();
    let meters = convert_str_to_float(input);
    let miles = convert_to_miles(meters);
    println!("Miles: {}", miles);
}

fn convert_str_to_float(input: String) -> f32 {
    input.trim().parse::<f32>().unwrap_or_else(|_| {
        eprintln!("- Please enter a valid input!");
        drop(input);
        process::exit(1);
    })
}

fn convert_to_miles(meters: f32) -> f32 {
    meters * 0.0006213712
}