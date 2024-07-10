use std::io;

fn main() {
    // Reading input numbers from the user
    let mut input = String::new();
    println!("Enter the first number:");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let num1: i32 = input.trim().parse().expect("Please type a number!");

    input.clear();
    println!("Enter the second number:");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let num2: i32 = input.trim().parse().expect("Please type a number!");

    // Calculate LCM using the recursive GCD function
    let lcm_value = lcm(num1, num2);
    println!("The LCM of {} and {} is {}", num1, num2, lcm_value);
}

fn gcd(a: i32, b: i32) -> i32 {
    if b == 0 {
        a.abs() // Ensure GCD is positive
    } else {
        gcd(b, a % b)
    }
}

fn lcm(a: i32, b: i32) -> i32 {
    (a * b).abs() / gcd(a, b) // Calculate LCM using the GCD
}
