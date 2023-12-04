// To convert an octal number to binary
// Example:
// 	Input  : 12
// 	Output : 1010

use std::io;

// ========== Function to convert Octal to Binary ====================

fn octaltobinary(octalin: &str) -> String {

	let mut usable  =  true;
	let mut binout = String::new(); 

	for character in octalin.chars() {
	        
		match character {
        		'0' => binout.push_str("000"),
        		'1' => binout.push_str("001"),
        		'2' => binout.push_str("010"),
        		'3' => binout.push_str("011"),
        		'4' => binout.push_str("100"),
       			'5' => binout.push_str("101"),
        		'6' => binout.push_str("110"),
        		'7' => binout.push_str("111"),
        		_ => {
        			print!("{} ",character);
        			println!(" - Number is not an Octal number");
				usable = false;
    			}
    		}
	}

	if usable {
		return binout;
		}
	else {
		let mut retmess = String::new();
		retmess.push_str("Octal not entered and cannot be converted");
		return retmess;
		}
}

//=============  Main function to drive testing and show how to call ===============
fn main() {

	// the input string and this main function can be removed. This is simply for testing
	println!("Input an Octal number");
	let mut input_num = String::new();	
	let _rtn = io::stdin().read_line(&mut input_num);

	// get rid of the newline at the end
	let len = input_num.len();
	input_num.truncate(len - 1);  

	// example of calling with an octal to convert to binary
	let bin_num = octaltobinary(&input_num);

	println!();
	println!("Octal number entered -> {}, converted to binary -> {} ", input_num, bin_num);
	println!();
}
