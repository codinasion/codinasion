fn main() {
    // Read the number of days from the user
    let mut days = String::new();
    println!("Enter the number of days: ");
    std::io::stdin().read_line(&mut days).expect("Failed to read input");

    // Convert the input to a number
    let days: i32 = match days.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Please enter a valid number of days.");
            return;
        }
    };

    // Calculate the number of weeks
    let weeks = days / 7;

    // Print the result
    println!("{} days is equivalent to {} weeks.", days, weeks);
}
