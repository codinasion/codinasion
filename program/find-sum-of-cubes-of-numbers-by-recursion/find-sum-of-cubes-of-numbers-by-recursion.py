from decimal import Decimal, DecimalException


def culc_sum_of_cubes_of_numbers(nums, res):
    if len(nums) <= 0:
        # when every numbers in the nums are calculated, array is empty and return result
        return res
    
    # pop the number from the nums array and add it to the result
    num = nums.pop()
    res += num ** 3
    return culc_sum_of_cubes_of_numbers(nums, res)

def convert_input_to_numbers_list(user_input):
    try:
        # separate the user input by empty space
        nums = user_input.split()
        
        nums = [Decimal(num) for num in nums]
        
    except (ValueError, DecimalException):
        print(f"Please enter valid input.")
        exit()
        
    return nums

def main():
    # receive a user input
    user_input = input(f"Enter the numbers (e.g. 1 2 3 4 5): ")
    nums = convert_input_to_numbers_list(user_input)
    
    res = culc_sum_of_cubes_of_numbers(nums, 0)
    print(f"the result of \"{user_input}\" = {res}")
       
main() 