/// # Author
/// Written by Levent Çelik, 2023.


/// Finds the index of a character in a string.
///
/// # Arguments
///
/// `s` - String in which to search for target.
/// `target` - Character to search in s.
///
/// # Returns
///
/// Option unwrapping to the index of target in s. 
fn find_char_index(s: &str, target: char) -> Option<usize> {
    s.char_indices()
        .find(|&(_, c)| c == target)
        .map(|(index, _)| index)
}

/// Prints whether the input string represents an integer value or a floating
/// point value. Note that this function uses mathematical logic; i.e.,
/// "5.0" -> Integer.
///
/// # Arguments
///
/// `num` - String representing an number
///
/// # Returns
///
/// ()
///
/// # Safety
///
/// Does not check whether the input is valid. So, "abc" -> Integer
///
fn integer_or_float_extended(num: &str) {
    match find_char_index(&num, '.') {
        Some(index) => {
            if index == num.len()-1 {
            println!("Integer");
            return;
            }
            for i in index+1..num.len() {
                if num.chars().nth(i).map_or(false, |c| c != '0') {
                    println!("Float");
                    return;
                }
            }
            println!("Integer");
        },
        None => println!("Integer")
    }
}

/// Prints whether the input string represents an integer value or a floating
/// point value. Note that this function uses programming logic; i.e.,
/// "5.0" -> Float.
///
/// # Arguments
///
/// `num` - String representing an number
///
/// # Returns
///
/// ()
///
/// # Safety
///
/// Does not check whether the input is valid. So, "abc" -> Integer
fn integer_or_float(num: &str) {
    match find_char_index(&num, '.') {
        Some(index) => println!("Float"),
        None => println!("Integer")
    }
    
}

fn main() {
    let text = "5.0";
    integer_or_float(&text);
    integer_or_float_extended(&text);
}
