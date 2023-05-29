
fn main() {
    let n = 10;
    let sum = sum_of_n_natural_numbers(n);
    println!("Sum of first {} natural numbers is {}", n, sum);
}

fn sum_of_n_natural_numbers(n: i32) -> i32 {
    if n == 0 {
        return 0;
    }
    return n + sum_of_n_natural_numbers(n - 1);
}