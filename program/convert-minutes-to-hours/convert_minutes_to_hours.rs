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
    
    let hours = minutes / 60;
    
    println!("{} minutes is equal to {} hours.", minutes, hours);
}