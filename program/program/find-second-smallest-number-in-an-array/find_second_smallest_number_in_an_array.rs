fn main(){
    let arr = [1,2,3,4,6,7,8,10,14];
    let mut small = i32::MAX;
    let mut second_small = i32::MAX;
    for num in arr{
        if num < small{
            second_small = small;
            small = num;
        } else if num < second_small &&  num!=small {
            second_small = num;
        } 
    }
    println!("{second_small}");
}    