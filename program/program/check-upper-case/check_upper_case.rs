fn check_upper_case(char: char) -> &'static str {
    let is_upper_case = char.is_uppercase();

    if is_upper_case {
        return "Upper Case";
    }

    return "Not Upper Case";
}

fn main() {
    let character = check_upper_case('a');
    println!("{}", character);
}