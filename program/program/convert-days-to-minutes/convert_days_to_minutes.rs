fn convert_days_to_minutes(days: u64) -> u64 {
	return days * 24 * 60;
}

fn main() {
	println!("{}", convert_days_to_minutes(5));
}
