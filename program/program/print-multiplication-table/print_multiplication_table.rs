use std::io::{self, Write};

fn main() { 
   print!("Input: ");
    io::stdout().flush().expect("flush failed!");

    let mut str = String::new();
    match io::stdin().read_line(&mut str) {
        Ok(_) => (),
        Err(err) => println!("Could not parse input: {}", err)
    }

    print_multi_table(&str);

}


fn print_multi_table(str:&String) {
    let n:i8 = str.trim().parse().expect("Failed to parse");
    let mut i = 1;
    while i <= 10 {
        println!("{n} x {i} = {}",n*i);
        i=i+1;
    };
}
