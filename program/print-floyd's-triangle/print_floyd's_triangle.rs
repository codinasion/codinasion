fn print_triangle(n: u32) {
    let mut current = 1;
    
    for i in 1 ..= n {
        for _ in 0 .. i {
            print!("{} ", current);
            current = current + 1;
        }
        println!("");
    }
}

fn main() {
    let n = 5;

    print_triangle(n);
}