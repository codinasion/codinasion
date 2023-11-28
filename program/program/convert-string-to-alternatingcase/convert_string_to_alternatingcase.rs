// This RUST program requires the convert_case (ccase) routines
//	for details see - https://docs.rs/convert_case/latest/convert_case/
// Convert case must be added to the Cargo.toml file:
//	command:$ cargo add convert_case

use convert_case::{Case, Casing};
use std::io;

fn convert_string_to_alternatingcase(strin: &str) -> String{

	// use the string in (strin) varible as the source to change to alternating case
	let s: String = String::from(strin);
 
 	// use the to_case call to convert and return to the answer to the caller
	let ans = s.to_case(Case::Alternating);
	return ans;
}

fn main(){

	// the input string and this main function can be removed. This is simply for testing
	let mut strin = String::new();
	let _rtrn = io::stdin().read_line(&mut strin);
	
	let dum = convert_string_to_alternatingcase(&strin);

	// print out the results of the conversion.
	println!("{}", dum);
}
