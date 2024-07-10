fn move_zeroes(arr: &mut Vec<i32>) {
    let mut non_zero_index = 0;

    // First pass: Move all non-zero elements to the front of the array
    for i in 0..arr.len() {
        if arr[i] != 0 {
            arr[non_zero_index] = arr[i];
            non_zero_index += 1;
        }
    }

    // Second pass: Fill the remaining positions with zeroes
    for i in non_zero_index..arr.len() {
        arr[i] = 0;
    }
}

fn main() {
    let mut arr = vec![0, 1, 0, 3, 12];
    println!("Original array: {:?}", arr);
    
    move_zeroes(&mut arr);
    
    println!("Array after moving zeroes: {:?}", arr);
}
