# Function to print ASCII value of a string
def print_ascii_value_of_a_string(string)
    string.each_byte do |char|
        print char, " "
    end
end

# Main function
def main
    string = "ABC"
    print_ascii_value_of_a_string(string)
end

# Call Main
main