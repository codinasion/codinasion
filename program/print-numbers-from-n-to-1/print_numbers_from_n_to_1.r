# Write a R program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

fn main() {
    userInput = readline(prompt="Enter a number: ")
    num = as.integer(userInput)

    while (num > 0) {
      print(num)
      num <- num - 1
    }
  
}

# Contributed by Technical Amanjeet 