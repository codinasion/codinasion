//  	Rust function to print an inverted pyramid pattern
//Example:
//  Input   : 5
//  Output : 
//	1 2 3 4 5
//	1 2 3 4 
//	1 2 3
//	1 2
//	1

use std::io;

fn print_inverted_triangle(n: u32) {

    let mut limit = n+1;
    
    for _i in 1 .. n+1 {

        for j in 1 .. limit {
            print!("{} ", j);
        }

	limit = limit - 1;
        println!();
    }
}

fn main() {

	// the input string and this main function can be removed. This is simply for testing

	println!("Enter the number of levels to print");
	let mut input_num = String::new();
	let _rtrn = io::stdin().read_line(&mut input_num);
	let n: u32 = input_num.trim().parse().expect("Input not an integer");	
		
	// example of how to call the function and print out the results of the inverted pyramid.
    	print_inverted_triangle(n);
}
