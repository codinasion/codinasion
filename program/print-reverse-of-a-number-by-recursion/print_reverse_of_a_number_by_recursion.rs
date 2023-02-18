fn print_reverse(n: u32) {
    if n == 0 {
        return;
    }

    print!("{}", n % 10);
    return print_reverse(n / 10);
}

fn main() {
    print_reverse(123);
}