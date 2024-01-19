use std::io;

fn selection_sort(arr: &mut Vec<i32>) {
    let n = arr.len();

    for i in 0..n {
        let mut min_index = i;

        for j in i + 1..n {
            if arr[j] < arr[min_index] {
                min_index = j;
            }
        }

        if min_index != i {
            arr.swap(i, min_index);
        }
    }
}

fn main() {
    // Take user input for the array
    let mut numbers = Vec::new();
    println!("Enter numbers separated by spaces:");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    for num in input.trim().split_whitespace() {
        if let Ok(n) = num.parse::<i32>() {
            numbers.push(n);
        }
    }

    println!("Original array: {:?}", numbers);

    selection_sort(&mut numbers);

    println!("Sorted array: {:?}", numbers);
}
