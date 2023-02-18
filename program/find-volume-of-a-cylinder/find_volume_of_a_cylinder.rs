use std::f64::consts::PI;

fn cylinder_volume(r: f64, h: f64) -> f64 {
    PI * r * r * h
}

fn main() {
    let r = 2.0;
    let h = 3.0;

    println!("{}", cylinder_volume(r, h));
}