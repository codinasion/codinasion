use std::io;

fn main() {
    println!("Enter the number of hours:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input.");
    
    let hours: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number of hours.");
            return;
        }
    };
    
    let minutes = hours * 60;
    
    println!("{} hours is equal to {} minutes.", hours, minutes);
}