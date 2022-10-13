from re import sub
a=input()
# the below line removes _ or - with " ", then each word's first letter is made capital,
# and finally we proceed with replacing " " with ""
a=sub("r[_|-]"," ",a).title().replace(" ","")
print(''.join([a[0].lower(),a[1:]]))

