def convert_string_to_consonantcase(str):
  solution = ''
  for letter in str:
    if letter not in ['a','e','i','o','u']:
      solution += letter.upper()
    else:
      solution += letter

  return solution

##example
user_input = input("Enter the string : ")
print(convert_string_to_consonantcase(user_input))
