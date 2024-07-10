fn print_numbers(n : i32){
    if n>0 {
        print_numbers(n-1);
        println!("{}", n);
    }
}

fn main(){
    let n = 5;
    print_numbers(n);
}