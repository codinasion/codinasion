use std::io;

fn main() {
    println!("Enter a string:");
    let mut input = String::new();

    // Reading input from user and handling possible errors
    if let Err(e) = io::stdin().read_line(&mut input) {
        eprintln!("Failed to read line: {}", e);
        return;
    }

    // Processing the input string
    match to_consonantcase(&input.trim()) {
        Ok(consonantcase_string) => println!("Consonantcase: {}", consonantcase_string),
        Err(e) => eprintln!("Error processing string: {}", e),
    }
}

fn to_consonantcase(s: &str) -> Result<String, &'static str> {
    // Check for empty string
    if s.is_empty() {
        return Err("Input string is empty");
    }

    let transformed = s.chars().map(|c| {
        match c {
            'a' | 'e' | 'i' | 'o' | 'u' |
            'A' | 'E' | 'I' | 'O' | 'U' => c.to_lowercase().to_string(),
            _ => c.to_uppercase().to_string(),
        }
    }).collect();

    Ok(transformed)
}