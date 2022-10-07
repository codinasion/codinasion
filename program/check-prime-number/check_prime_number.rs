fn is_prime(n: u32) -> bool {
    if n<=1 {
        return false;
    }

    for i in 2..n {
        if n%i == 0 {
            return false;
        }
    }

    return true
}

fn main() {
    let n = is_prime(17);
    println!("{}", n);
}