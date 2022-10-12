var reversen = 0
var rem = 0
var n = 121
var no = n
no=n

while n != 0 {
    rem = n%10
    reversen = reversen * 10 + rem
    n /= 10
}
if(no == reversen)
{
    print("\(no)" + " is palindrome")
}
else
{
    print("\(no)" + " is  not palindrome")
   
}