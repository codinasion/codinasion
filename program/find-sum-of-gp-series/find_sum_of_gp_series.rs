fn sum_of_gp(a: u32, r: u32, n: u32) -> u32 {
    a * (u32::pow(r, n) - 1) / (r - 1)
}

fn main() {
    let a = 2;
    let r = 3;
    let n = 3;

    println!("{}", sum_of_gp(a, r, n));
}