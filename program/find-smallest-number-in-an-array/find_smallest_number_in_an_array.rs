fn main() {
    // Define the array of numbers
    let numbers = [1, 2, 3, 4, 5];

    // Initialize a variable to store the smallest number
    let mut smallest = numbers[0];

    // Iterate over the array and find the smallest number
    for number in numbers.iter() {
        if *number < smallest {
            smallest = *number;
        }
    }

    // Print the smallest number
    println!("The smallest number is {}", smallest);
}
