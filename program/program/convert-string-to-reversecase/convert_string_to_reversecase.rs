fn main(){
    let input = "hello world";
    let mut ans = String::with_capacity(input.len());
    for i in input.chars(){
        if i.is_ascii_uppercase(){
            ans.push(i.to_ascii_lowercase());
        } else if i.is_ascii_lowercase(){
            ans.push(i.to_ascii_uppercase());
        } else {ans.push(i);}
    }
    println!("{}", ans);
}