fn convert_hours_to_weeks(hours: u16) -> u16 {
	return hours / 24 / 7;
}

fn main() {
	println!("{}", convert_hours_to_weeks(840));
}
