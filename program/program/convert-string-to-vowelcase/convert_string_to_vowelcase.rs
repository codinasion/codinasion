fn to_vowel_case(input: &str) -> String {
    let mut result = String::new();

    for c in input.chars() {
        match c.to_lowercase().next().unwrap() {
            'a' | 'e' | 'i' | 'o' | 'u' => result.push(c.to_uppercase().next().unwrap()),
            _ => result.push(c.to_lowercase().next().unwrap()),
        }
    }

    result
}

fn main() {
    let input1 = "hello world";
    let output1 = to_vowel_case(input1);
    println!("Input: {}\nOutput: {}\n", input1, output1);

    let input2 = "Programming IS Fun";
    let output2 = to_vowel_case(input2);
    println!("Input: {}\nOutput: {}\n", input2, output2);

    let input3 = "Rust Language";
    let output3 = to_vowel_case(input3);
    println!("Input: {}\nOutput: {}\n", input3, output3);
}
