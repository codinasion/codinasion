fn factorial(num: i64) -> i64 {
    if num == 0 {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

fn permutations(total: i64, sample: i64) -> i64 {
    if total > sample {
        return factorial(total) / factorial(total - sample);
    } else {
        panic!(
            "ERROR: supplied total > sample; permutations(total={}, sample={})",
            total, sample
        )
    }
}

fn main() -> () {
    println!("{}", permutations(5, 2))
}
