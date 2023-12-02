// Rust function to convert fahrenheit to celsius

use std::io;

fn convert_fahrenheit_to_celsius(fahrin: &str) -> String{

    	let fahrin: f32 = fahrin.trim().parse().expect("Must enter a temperature °C");
    	let celsius = ((fahrin - 32.0) * 5.0) / 9.0;

	let celout = format!("{}", celsius);
	return celout;
}

fn main(){
	// the input string and this main function can be removed. This is simply for testing
	
	println!("Enter the temperature in fharenheit");
  	let mut fahrenheit = String::new();	
	let _rtn = io::stdin().read_line(&mut fahrenheit);	

	let celsius = convert_fahrenheit_to_celsius(&fahrenheit);

	// print out the results of the conversion.
	let len = fahrenheit.len();
	fahrenheit.truncate(len - 1);
	println!();
	println!("{}°F is {}°C", fahrenheit, celsius);

}
