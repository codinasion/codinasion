use std::io;

fn binary_search(arr: &[i32], key: i32) -> Option<usize> {
  let mut low = 0;
  let mut high = arr.len() - 1;

  while low <= high {
    let mid = low + (high - low) / 2;

    if arr[mid] == key {
      return Some(mid);
    } else if arr[mid] < key {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  None
}

fn main() {
  let size: usize = read_input();
  let mut arr = read_array(size);
  let key: i32 = read_input();

  match binary_search(&arr, key) {
    Some(result) => println!("Element found at index: {}", result),
    None => println!("Element not found in the array."),
  }
}

fn read_input<T>() -> T
where
  T: std::str::FromStr,
  T::Err: std::fmt::Debug,
{
  let mut input = String::new();
  io::stdin().read_line(&mut input).expect("Failed to read input");
  input.trim().parse().expect("Invalid input")
}

fn read_array(size: usize) -> Vec<i32> {
  (0..size)
    .map(|_| read_input())
    .collect()
}
