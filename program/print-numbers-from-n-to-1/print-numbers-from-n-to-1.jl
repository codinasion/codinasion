# Write a Julia program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

num = 5
i = num
  
# while loop
while i > 0

    # Printing values of Array
    println(i)
      
    # Updating iterator globally
    global i -= 1
      
# Ending Loop
end

# contributed by Technical Amanjeet 
