//Rust program to print pascal's triangle
//
//Pascal's triangle is a triangular array of the binomial coefficients. Write a function that takes an
// integer value n as input and prints first n lines of the Pascal's triangle.
//
//Input  : 5
//
//Output : 
//        1
//       1 1
//      1 2 1
//     1 3 3 1
//    1 4 6 4 1

use std::io;

fn print_pascals_triangle(levels: u32)
{

	// outer loop to go through all the levels
  	for row in 0..levels {

    		let mut print_num = 1;	//start every row with "1"
    
    		//print spaces out before row based on num of levels

    		for _j in 1..2*(levels-1-row)+1 {
      		print!(" ");
    		}
    
    		// calculate binomial coefficients ==> p = p * ((row-col)/(col+1))

    		for calc_col in 0..row+1 {
      			print!("{:3} ", print_num);
      			print_num = print_num * (row-calc_col)/(calc_col+1);
    		}
    
    		println!(); //insert a newline to start the next line to print
  	}
}

fn main() {

	// the input string and this main function can be removed. This is simply for testing

	println!("Enter the number of levels to print");
	let mut input_num = String::new();
	let _rtrn = io::stdin().read_line(&mut input_num);
	let n: u32 = input_num.trim().parse().expect("Input not an integer");	
		
	// example of how to call the function and print out the results of the inverted pyramid.
    	print_pascals_triangle(n);
}
