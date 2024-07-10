fn printnumbers(n: i32){
    if n>0 {
        print!("{n} ");
        printnumbers(n-1);
    }
}

fn main(){
    let n = 5;
    printnumbers(n);
}