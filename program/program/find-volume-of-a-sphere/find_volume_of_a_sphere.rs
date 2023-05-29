fn find_volume_of_a_sphere(radius: u64) -> f64 {
	const PI: f64 = 3.1415926535897931f64;
	return 4.0 / 3.0 * PI * (radius as f64).powf(3.0);
}

fn main() {
	println!("{}", find_volume_of_a_sphere(2));
}
