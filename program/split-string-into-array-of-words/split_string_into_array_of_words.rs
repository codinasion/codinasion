fn split_string(s: &str) -> Vec<&str> {
  s.split_whitespace().collect()
}

fn main() {
  let s = "hello world";
  let words = split_string(s);
  println!("{:?}", words);
}
