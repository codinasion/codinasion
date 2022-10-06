fn convert_minutes_to_weeks(minutes: u64) -> u64 {
	return minutes / 60 / 24 / 7;
}

fn main() {
	println!("{}", convert_minutes_to_weeks(50400));
}
