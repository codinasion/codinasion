fn main(){
    let numbers = vec![1,2,3,4,5,6,7,8,9,10];
    let avg: f32;
    let mut sum: i32 = 0;
    {
        for i in &numbers{
            sum = sum + i;
        }
        avg = sum as f32 / numbers.len() as f32;
    } 
    println!("{}", avg);
}
