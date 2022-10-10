// Write a Rust program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

fn main() {
  println!("Enter number:");

  let mut input = String::new();
  std::io::stdin().read_line(&mut input).expect("error getting input!");

  let number: f64 = input.trim().parse().expect("Input is not a valid number");
  let i = number

  while i > 0 {
    println!("{i} ");
    i = i - 1;
}

}

// Contributed by technical Amanjeet 
