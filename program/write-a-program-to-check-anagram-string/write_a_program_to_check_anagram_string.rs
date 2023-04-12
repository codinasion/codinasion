use std::io;

fn main() {

  let mut buff = String::new();

  io::stdin().read_line(&mut buff);

  let strs: Vec<&str> = buff.split(",").collect();

  let mut char_vec_a : Vec<char> = strs[0].to_owned().chars().collect();
  let mut char_vec_b : Vec<char> = strs[1].to_owned().chars().collect();

  char_vec_a.sort();
  char_vec_b.sort();

  if  char_vec_a==char_vec_b {
      println!("Anagram Strings");
  } else {
      println!("Not Anagram Strings");
  }

}
