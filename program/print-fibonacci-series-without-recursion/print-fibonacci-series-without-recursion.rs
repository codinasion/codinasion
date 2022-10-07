fn print_fibonacci(mut a:i32, mut b:i32, n:i32) {

    let mut count:i32=n-2;
    print!("{} ", a);
    print!("{} ", b);
        loop {
            if count==0
            {break;}
              if n == 1 {
                print!("{} ", a);
                continue;
            }
            if n == 2 {
                print!("{} ", b);
                continue;
            }
            let sum = a + b;
            {print!("{} ", sum)};
            a = b;
            b = sum;
            count=count-1;
        }
        
    }
    
    fn main() {
        let  a:i32 = 0;
        let  b:i32 = 1;
        let n:i32 = 8;
        if n==1
        {print!("{} ",0);
            return;
        };
        if n==2
        {print!("{} {}",0,1);
            return;
        };
        println!("Fibonacci series:");
        print_fibonacci(a, b, n);
        println!();
    }