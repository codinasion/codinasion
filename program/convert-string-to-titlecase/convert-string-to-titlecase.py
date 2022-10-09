a=input()
ans=""
ans+=a[0].upper()
for i in range(1,len(a)):
    if a[i-1]==' ':
        ans+=a[i].upper()
    else:
        ans+=a[i]
print(ans)