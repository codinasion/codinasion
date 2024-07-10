fn merge_two_strings(str1: &str, str2: &str) -> String {
    let mut str3 = String::new();
    str3.push_str(str1);
    str3.push_str(str2);
    return str3
}

fn main() {
    println!("{}", merge_two_strings("ABC", "DEF"));
}