fn check_palindrome_string(string: &str) {
	let reverse_string: String = string.chars().rev().collect();

	if string == reverse_string {
		println!("Palindrome String");
	} else {
		println!("Not Palindrome String");
	}
}

fn main() {
	check_palindrome_string("abba");
}
