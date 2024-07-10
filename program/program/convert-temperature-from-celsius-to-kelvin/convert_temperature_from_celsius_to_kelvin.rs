// Convert celsius to kelvin
use std::env;
fn main() {
    let args: Vec<String> = env::args().collect();
    let celsius = &args[1];
    let celsius: f32 = celsius.parse().expect("Invalid value for celcius");
    let kelvin = celsius + 273.15;
    println!("Input ( C ) : {}", celsius);
    println!("Output ( K ) : {}", kelvin);
}
