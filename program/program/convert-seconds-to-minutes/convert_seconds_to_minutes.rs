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
    
    let minutes = seconds / 60;
    let remainder_sec = seconds - (minutes * 60);
    
    println!("{} seconds is equal to {} minutes {} seconds.", seconds, minutes, remainder_sec);
}
