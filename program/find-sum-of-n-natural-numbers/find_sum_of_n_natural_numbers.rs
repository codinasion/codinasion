fn find_sum_of_n_natural_numbers(n: u16) -> u16 {
	return n * (n + 1) / 2;
}

fn main() {
	println!("{}", find_sum_of_n_natural_numbers(5));
}
