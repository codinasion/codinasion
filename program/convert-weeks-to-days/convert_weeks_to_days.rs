fn main() {
    // Read the number of weeks from the user
    let mut weeks = String::new();
    println!("Enter the number of weeks: ");
    std::io::stdin().read_line(&mut weeks).expect("Failed to read input");

    // Convert the input string to a number
    let weeks: i32 = weeks.trim().parse().expect("Please enter a valid number");

    // Calculate the equivalent number of days
    let days = weeks * 7;

    // Print the result
    println!("{} weeks is equivalent to {} days.", weeks, days);
}


