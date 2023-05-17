fn sum_of_squares(numbers: &[i32]) -> i32 {
    let mut sum = 0;
    for &num in numbers {
        sum += num * num;
    }
    sum
}
