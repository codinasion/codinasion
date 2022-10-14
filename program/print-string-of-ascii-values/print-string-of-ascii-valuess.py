x=input('enter ascii value:')
l=x.split()
string=''
for i in l:
    string=string+chr(int(i))

print('Output', string)