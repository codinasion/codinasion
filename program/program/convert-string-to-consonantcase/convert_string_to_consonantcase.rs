fn main(){
    let input = "hello world!";
    let mut ans = String::with_capacity(input.len());
    let mut next = true;
    for i in input.chars(){
        if next{
            ans.push(i.to_ascii_uppercase());
            next = false;
        } else {
            ans.push(i.to_ascii_lowercase());
        }
    }
    println!("{}", ans);
}