fn convert_hours_to_seconds(hours: u64) -> u64 {
	return hours * 60 * 60;
}

fn main() {
	println!("{}", convert_hours_to_seconds(5));
}