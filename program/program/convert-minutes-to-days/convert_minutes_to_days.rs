use std::io;

fn main() {
    println!("Enter the number of minutes:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input.");
    
    let minutes: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number of minutes.");
            return;
        }
    };
    
    let days = minutes / 1440;
    
    println!("{} minutes is equal to {} days.", minutes, days);
}