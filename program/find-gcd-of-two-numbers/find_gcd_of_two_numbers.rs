// Rust program to find the GCD 

use std::io;

fn main() 
{
    let mut n1:i32 = 0;
    let mut n2:i32 = 0;
    let mut rem:i32= 0;
    let mut x:i32  = 0;
    let mut y:i32  = 0;
    
    let mut input1 = String::new();
    let mut input2 = String::new();
    
    println!("Enter Number1: ");
    io::stdin().read_line(&mut input1).expect("Not a valid string");
    n1 = input1.trim().parse().expect("Not a valid number");

    println!("Enter Number2: ");
    io::stdin().read_line(&mut input2).expect("Not a valid string");
    n2 = input2.trim().parse().expect("Not a valid number");
    
    if (n1 > n2) 
    {
        x = n1;
        y = n2;
    }
    else 
    {
        x = n2;
        y = n1;
    }

    rem = x % y;

    while (rem != 0) {
        x = y;
        y = rem;
        rem = x % y;
    }

    println!("Greatest Common Divisor is: {}", y);
}