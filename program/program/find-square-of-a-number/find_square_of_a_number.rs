fn square(num: i32) -> i32 
{
  
  let square_of_num = num*num;
  
  return square_of_num
}

fn main() 
{
 let square =  square(5);

 println!("{}", square);
}
