fn find_largest_two_elements(arr: &[i32]) -> (i32, i32) {
    if arr.len() < 2 {
        panic!("Array must contain at least two elements");
    }

    let mut largest = arr[0];
    let mut second_largest = arr[1];

    if second_largest > largest {
        std::mem::swap(&mut largest, &mut second_largest);
    }

    for &num in &arr[2..] {
        if num > largest {
            second_largest = largest;
            largest = num;
        } else if num > second_largest {
            second_largest = num;
        }
    }

    (largest, second_largest)
}

fn main() {
    let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    let (largest, second_largest) = find_largest_two_elements(&arr);
    println!("The largest element is: {}", largest);
    println!("The second largest element is: {}", second_largest);
}
