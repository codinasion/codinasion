fn main() {
    let length = 2.0;
    let width = 3.0;
    let height = 4.0;
    let area = 2.0 * (length * width + length * height + width * height);

    println!("Area of cuboid is {0}", area as f32);
}
