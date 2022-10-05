import string
  
alphabet = set(string.ascii_lowercase)
  
def ispangram(str):
     return sum(1 for i in set(str) if 96 < ord(i) <= 122) == 26
      
string = str(input())
if(ispangram(string) == True):
    print("Pangram sentence")
else:
    print("Not pangram sentence")