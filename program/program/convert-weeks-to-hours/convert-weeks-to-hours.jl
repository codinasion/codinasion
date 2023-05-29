result = 0
  
# Prompt to enter
total_hrs = 0

println("Enter number of weeks : ")

num_of_weeks = readline()
num_of_weeks = parse(Int64, num_of_weeks) 
  
total_hrs = num_of_weeks * 168

  
println("Total hrs :", total_hrs)
