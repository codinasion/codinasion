fn convert_string_to_kebabcase(text: String) -> String {
	return text.to_lowercase().replace(" ", "-");
}

fn main() {
	let text: String = String::from("hello world");
	println!("{}", convert_string_to_kebabcase(text));
}