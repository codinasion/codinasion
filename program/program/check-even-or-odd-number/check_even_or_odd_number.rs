fn main() 
{
    let num: i32 = 23;
    
    let result = if let 0=num%2{
        "Even"
    }
    else{
        "Odd"
    };
    
    println!("{} is: {}",num,result);
}