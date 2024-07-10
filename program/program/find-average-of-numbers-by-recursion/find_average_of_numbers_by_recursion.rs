use std::io;
use std::str::FromStr;

fn average_recursive(numbers: &[i32], sum: f64, count: usize) -> f64 {
    match numbers {
        [] => sum / count as f64,
        [first, rest @ ..] => {
            let new_sum = sum + *first as f64;
            let new_count = count + 1;
            average_recursive(rest, new_sum, new_count)
        }
    }
}

fn main() {
    println!("Enter numbers separated by space:");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let numbers: Vec<i32> = input
        .split_whitespace()
        .filter_map(|num| i32::from_str(num).ok())
        .collect();

    if numbers.is_empty() {
        println!("No numbers entered.");
        return;
    }

    let avg = average_recursive(&numbers, 0.0, 0);
    println!("The average is {}", avg);
}
