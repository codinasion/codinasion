fn main() {
    let nums = 1000;

    // convert number to string
    let str_nums = nums.to_string();

    // reverse the string
    let rev_str = str_nums.chars().rev().collect::<String>();

    // convert string to number
    let result = rev_str.parse::<i32>().unwrap();
    
    println!("{}", result);
}