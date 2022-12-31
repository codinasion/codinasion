def convert_string_to_consonantcase(str):
  solution = ''
  for letter in str:
    if letter not in ['a','e','i','o','u']:
      solution += letter.upper()
     else:
      solution += letter
      
  return solution

##example

print(convert_string_to_consonantcase("hello world"))

## "HeLLo WoRLD"
