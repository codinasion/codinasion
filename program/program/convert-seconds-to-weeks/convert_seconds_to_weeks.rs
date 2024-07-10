use std::io;

fn main() {
    println!("Enter the number of seconds:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input.");
    
    let seconds: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number of seconds.");
            return;
        }
    };
    
    let weeks = seconds / 604800;
    
    println!("{} seconds is equal to {} weeks.", seconds, weeks);
}