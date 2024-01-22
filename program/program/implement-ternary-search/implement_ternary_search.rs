fn ternary_search(arr: &[i32], value: i32) -> Option<usize> {
    let mut l = 0;
    let mut r = arr.len() - 1;

    while l <= r {
        let partition_size = (r - l) / 3;
        let mid1 = l + partition_size;
        let mid2 = r - partition_size;

        if arr[mid1] == value {
            return Some(mid1);
        }

        if arr[mid2] == value {
            return Some(mid2);
        }

        if value < arr[mid1] {
            r = mid1 - 1;
        } else if value > arr[mid2] {
            l = mid2 + 1;
        } else {
            l = mid1 + 1;
            r = mid2 - 1;
        }
    }

    None
}

fn main() {
    let list = vec![1, 2, 3, 4, 5];
    let value = 4;

    match ternary_search(&list, value) {
        Some(index) => println!("Output: {}", index),
        None => println!("Element not found"),
    }
}
