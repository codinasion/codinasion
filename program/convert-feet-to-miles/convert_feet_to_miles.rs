fn main() {
    println!("This program converts feet to miles. Enter input:");

    let mut input = String::new();
    std::io::stdin().read_line(&mut input).expect("error getting input!");

    let feet: f64 = input.trim().parse().expect("Input is not a valid number");
    let miles = feet / 5280.0;

    println!("Miles: {miles}");
}
