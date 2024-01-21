use std::io;

fn main() {
    println!("Enter the size of the array:");
    let mut size = String::new();
    io::stdin().read_line(&mut size).expect("Failed to read line");
    let size: usize = size.trim().parse().expect("Invalid input");
    let mut numbers = Vec::new();

    println!("Enter {} elements:", size);
    for _ in 0..size {
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Failed to read line");
        let number: i32 = input.trim().parse().expect("Invalid input");
        numbers.push(number);
    }
    numbers.sort_by(|a, b| b.cmp(a));

 
    println!("The largest three elements are:");
    for i in 0..3 {
        println!("{}", numbers[i]);
    }
}
