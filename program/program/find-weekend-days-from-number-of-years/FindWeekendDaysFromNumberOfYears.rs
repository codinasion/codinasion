use std::io;

fn main() {
    let mut years: i32 = 0;

    println!("How many years do you want to convert to weekends?");

    // Keep asking for input until a valid value is entered
    loop {
        let mut input = String::new();
        io::stdin()
            .read_line(&mut input)
            .expect("Failed to read line");

        match input.trim().parse::<i32>() {
            Ok(value) => {
                years = value;
                break;
            }
            Err(_) => {
                println!("Enter a valid number!");
            }
        }
    }

    if years <= 0 {
        println!("Invalid input: must be a positive number!");
        return;
    }

    let weekends = years * 104;
    println!("{} weekends are in {} years", weekends, years);
}
