fn main() {
    let length = 2.0;
    let width = 3.0;
    let height = 4.0;
    let surfaceArea = 2.0 * (length * width + length * height + width * height);

    println!("Surface area of cuboid is {0}", surfaceArea as f32);
}
