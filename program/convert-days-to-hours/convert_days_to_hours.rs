use std::io;

fn main() {
    println!("Enter the number of days: ");

    let mut days = String::new();
    io::stdin().read_line(&mut days).expect("Failed to read input");

    let days: u32 = match days.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Please enter a valid number of days");
            return;
        }
    };

    let hours = days * 24;
    println!("{} days is equal to {} hours", days, hours);
}
