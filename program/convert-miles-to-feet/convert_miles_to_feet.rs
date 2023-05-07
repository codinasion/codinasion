use std::io;

fn main() {
    println!("Enter miles:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let miles: f32 = input.trim().parse().expect("Please enter a valid number");

    let feet = miles * 5280.0;

    println!("{} miles = {} feet", miles, feet);
}
