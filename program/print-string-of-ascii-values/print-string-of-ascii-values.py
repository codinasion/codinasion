l=[]
x='x'

print('enter one ASCII value or type x to get output')
while True:
    y=eval(input('enter the ASCII Value:'))
    if y=='x':
        break
    else:
        l.append(y)
string=""
for i in l:
    string=string+chr(i)
    
print(string)

        
