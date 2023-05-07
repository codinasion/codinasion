use std::io;

fn main() {
    println!("Enter temperature in Fahrenheit: ");
    
    let mut fahrenheit = String::new();
    io::stdin().read_line(&mut fahrenheit)
        .expect("Failed to read input");
    
    let fahrenheit: f64 = match fahrenheit.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number.");
            return;
        }
    };
    
    let kelvin = (fahrenheit - 32.0) * (5.0/9.0) + 273.15;
    
    println!("Temperature in Kelvin: {:.2}", kelvin);
}
