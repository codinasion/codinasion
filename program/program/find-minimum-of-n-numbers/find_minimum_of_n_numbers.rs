fn find_minimum_of_n_numbers(nums: &mut [i32]) -> i32 {
    nums.sort();
    return nums[0];
}

// testing
fn main() {
    let mut arr: [i32; 4] = [1, 5, 3, 6];
    let rs = find_minimum_of_n_numbers(&mut arr);
    println!("Minimum of n numbers is {:?}", rs);
}