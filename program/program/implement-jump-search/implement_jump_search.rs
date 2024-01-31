use std::io;

fn jump_search(arr: &[i32], x: i32) -> Option<usize> {
    let n = arr.len();

    let block_size = (n as f64).sqrt() as usize;

   
    let mut block_idx = 0;
    while block_idx < n && arr[block_idx] < x {
        block_idx += block_size;
    }
    let mut i = block_idx - block_size;
    while i < n && arr[i] < x {
        i += 1;
    }
    if i < n && arr[i] == x {
        Some(i)
    } else {
        None
    }
}

fn main() {
    
    println!("Enter a sorted list of integers separated by spaces:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let arr: Vec<i32> = input
        .trim()
        .split_whitespace()
        .filter_map(|s| s.parse().ok())
        .collect();

    println!("Enter the element to search:");
    let mut search_element = String::new();
    io::stdin()
        .read_line(&mut search_element)
        .expect("Failed to read line");

    let x: i32 = search_element.trim().parse().expect("Invalid input");

   
    match jump_search(&arr, x) {
        Some(index) => println!("Element {} found at index {}", x, index),
        None => println!("Element {} not found in the list", x),
    }
}
