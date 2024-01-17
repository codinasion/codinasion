fn linear_search<T: PartialEq>(list: &[T], target: T) -> Option<usize> {
    for (index, item) in list.iter().enumerate() {
        if item == &target {
            return Some(index);
        }
    }
    None
}

fn main() {
    let elements = vec![1, 2, 3, 4, 5];
    let target = 4;

    match linear_search(&elements, target) {
        Some(index) => println!("Found the element {} at index {}", target, index),
        None => println!("Element {} not found in the list", target),
    }
}
