use std::io;
use std::io::Write;

fn main() {    
    let mut num = String::new();
    let mut sum: i64 = 0;
    
    print!("Insert number: ");
    io::stdout().flush().unwrap();
    
    io::stdin()
        .read_line(&mut num)
        .expect("Failed to read line");
    
    let mut num: i64 = num
        .trim()
        .parse()
        .expect("Please enter a valid number!");
    
    while num > 0 {
        sum += num%10;
        num /= 10
    }
    println!("{sum}");
}

