fn main() {
    // Prompt the user for the number of inches
    println!("Enter the number of inches: ");

    // Read the user input and store it in a variable
    let mut inches = String::new();
    std::io::stdin().read_line(&mut inches)
        .expect("Failed to read line");

    // Check if the input is empty
    if inches.trim().is_empty() {
        println!("Please enter a valid number");
        return;
    }

    // Convert the input to a number
    let inches: u32 = inches.trim().parse()
        .expect("Please enter a valid number");

    // Convert inches to feet
    let feet = inches / 12;

    // Print the result
    println!("{} inches is equal to {} feet", inches, feet);
}
