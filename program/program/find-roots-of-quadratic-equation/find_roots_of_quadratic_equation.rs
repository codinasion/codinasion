// Rust program to get the roots of a quadratic equation

fn roots(a:f32, b:f32, c:f32) {
    
    let disc:f32 = b * b - 4.0 * a * c;
    let root_a:f32 = (-b + disc.sqrt()) / (2.0 * a);
    let root_b:f32 = (-b - disc.sqrt()) / (2.0 * a);

    println!("Root1 = {}  ", root_a);
    println!("Root2 = {}  ", root_b);
}

fn main() {
    roots(1.0,-5.0,6.0);
}