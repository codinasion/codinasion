use std::io::{self, Write};

fn main() { 
   print!("Input: ");
    io::stdout().flush().expect("flush failed!");

    let mut str = String::new();
    match io::stdin().read_line(&mut str) {
        Ok(_) => (),
        Err(err) => println!("Could not parse input: {}", err)
    }

    for i in str.chars() {
        if i.is_uppercase() {
          println!("Output: Upper Case");
            return;
        }
    }
    println!("Output: Lower Case")
}
