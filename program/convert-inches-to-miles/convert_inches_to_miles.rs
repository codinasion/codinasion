fn convert_inches_to_miles(inch: u64) -> u64 {
	return inch / 63360;
}

fn main() {
	println!("{}", convert_inches_to_miles(316800));
}
