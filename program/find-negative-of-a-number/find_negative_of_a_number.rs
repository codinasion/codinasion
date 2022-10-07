fn negative_of_a_number(num: i32) -> i32 {
    return num*-1;
}

fn main() {
    let inverse = negative_of_a_number(5);
    println!("{}", inverse);
}