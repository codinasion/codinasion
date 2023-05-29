fn reverse_string(string: &str) -> String {
    string.chars().rev().collect()
}

fn main() {
    println!("{}", reverse_string("abcd"));
}
