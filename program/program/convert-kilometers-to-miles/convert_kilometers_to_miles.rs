use std::io;

fn main() {
    println!("Enter the distance in kilometers:");

    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");

    let kilometers: f64 = input.trim().parse().expect("Please type a number!");

    let miles = convert_km_to_miles(kilometers);
    println!("{:.2} kilometers is {:.2} miles.", kilometers, miles);
}

fn convert_km_to_miles(km: f64) -> f64 {
    km * 0.621371
}
