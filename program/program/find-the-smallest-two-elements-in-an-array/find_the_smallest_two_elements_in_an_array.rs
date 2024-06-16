fn main() {

    // Initialized array
    let arr = [-4, 0, 2, 1, 11, 23, 57, -10];

    // Printing the array
    print!("Our array: [  ");
    for val in arr.iter(){
        print!("{}  ", val); 
    }
    print!("]\n");

    // Declare and initialize variables to be the first element of array by default 
    let mut smallest_value = arr[0];
    let mut second_smallest_value = arr[0];

    // Loop to find the smallest value and second smallest value in the array
    for val in arr.iter(){
        if *val < smallest_value {
            second_smallest_value = smallest_value;
            smallest_value = *val;
        }   
    }

    // Printing the smallest value and second smallest value
    print!("smallest_value: {}  second_smallest_value: {} \n", smallest_value, second_smallest_value);


}
