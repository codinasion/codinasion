import re


# function to check for special character
def run(string):
    regex = re.compile("[@_!#$%^&*()<>?/\|}{~:]")
    if regex.search(string) == None:
        print("Not a special character found!")
    else:
        print("This is a special character")


# driver code
if __name__ == "__main__":
    user = input("Input:")
    run(user)
