fn avg_of_digits(n: u32) -> f32 {
    let (sum, count) = sum_and_count_of_digits(n);
    sum as f32 / count as f32
}

fn sum_and_count_of_digits(n: u32) -> (u32, u32) {
    if n == 0 {
        (0, 0)
    } else {
        let (sum, count) = sum_and_count_of_digits(n / 10);
        (sum + n % 10, count + 1)
    }
}
