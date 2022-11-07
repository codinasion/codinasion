use std::io;

fn main() {
    let mut n: String = String::new();
    println!("Enter the size of the array");
    io::stdin().read_line(&mut n).expect("Failed to read line");
    let n: i32 = n.trim().parse().expect("Pass a number");

    let mut v: Vec<i32> = Vec::new();

    println!("Enter the elements of the array");
    let mut n_: i32 = n;
    loop {
        if n_ == 0 {
            break;
        }
        n_ -= 1;
        let mut input: String = String::new();
        io::stdin()
            .read_line(&mut input)
            .expect("Failed to read line");
        let input: i32 = input.trim().parse().expect("Pass a number");
        v.push(input);
    }

    let mut search: String = String::new();
    println!("Enter the number to be searched");
    io::stdin()
        .read_line(&mut search)
        .expect("Failed to read line");
    let search: i32 = search.trim().parse().expect("Pass a number");

    let mut found: bool = false;
    for i in 0..n {
        if v[i as usize] == search {
            found = true;
            break;
        }
    }

    if !found {
        println!("Not found");
    } else {
        println!("Found");
    }
}

// rustc LinearSearch.rs && ./LinearSearch
