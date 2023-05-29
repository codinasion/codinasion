use std::io;
use std::process;
use std::f64::consts;

fn main() {
    let mut input = String::new();
    println!("Please enter radius: ");
    io::stdin().read_line(&mut input).unwrap();
    let radius = convert_str_to_float(input);
    let area = calculate_area(radius);
    println!("Area: {}", area);
}

fn convert_str_to_float(input: String) -> f64 {
    input.trim().parse::<f64>().unwrap_or_else(|_| {
        eprintln!("- Please enter a valid input!");
        drop(input);
        process::exit(1);
    })
}

fn calculate_area(radius: f64) -> f64 {
    consts::PI * radius * radius
}