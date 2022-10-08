fn check_palindrome(mut num: i32) -> bool {
    let mut remainder;
    let temp;
    let mut reversed = 0;

    temp = num;

    while num>0 {
        remainder = num%10;
        num = num/10;
        reversed  = reversed*10 +remainder;
    }
        
    return reversed == temp;
}

fn main() {
    let palindrome = check_palindrome(199);

    println!("{}", palindrome)
}