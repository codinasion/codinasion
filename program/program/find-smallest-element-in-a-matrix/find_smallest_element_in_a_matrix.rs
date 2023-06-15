fn main(){
    let mat = vec![
                    vec![67,28,33],
                    vec![44,15,19],        
                    vec![7,58,29],];
    let mut small = i32::MAX;
    for row in mat{
        for num in row{
           if num < small {
               small = num;
           }
        }
    }
    println!("{small}");
}