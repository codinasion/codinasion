fn convert_miles_to_km(miles: f32) -> f32 {
    return miles*1.609;
}

fn main() {
    let kilometers = convert_miles_to_km(5 as f32);
    println!("{}", kilometers);
}