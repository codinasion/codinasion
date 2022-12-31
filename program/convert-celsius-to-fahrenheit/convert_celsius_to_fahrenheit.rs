// Convert celsius to fahrenheit
use std::io;
fn main() {
    println!("Enter the temperature in celsius");
    let mut celsius = String::new();
    io::stdin().read_line(&mut celsius).expect("Failed to read line");
    let celsius: f32 = celsius.trim().parse().expect("Please type a number!");
    let fahrenheit = (celsius * 1.8) + 32.0;
    println!("{}°C is {}°F", celsius, fahrenheit);
}