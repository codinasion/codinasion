use std::io;

fn main() {
    println!("Enter the number of days:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input.");
    
    let days: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number of days.");
            return;
        }
    };
    
    let seconds = days * 86400;
    
    println!("{} days is equal to {} seconds.", days, seconds);
}