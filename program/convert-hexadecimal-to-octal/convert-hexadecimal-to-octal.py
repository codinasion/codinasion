print("Input  : ", end="")
hnum = input()

chk = dnum = i = 0
hlen = len(hnum) - 1
while hlen>=0:
    if hnum[hlen]>='0' and hnum[hlen]<='9':
        rem = int(hnum[hlen])
    elif hnum[hlen]>='A' and hnum[hlen]<='F':
        rem = ord(hnum[hlen]) - 55
    elif hnum[hlen]>='a' and hnum[hlen]<='f':
        rem = ord(hnum[hlen]) - 87
    else:
        chk = 1
        break
    dnum = dnum + (rem * (16 ** i))
    hlen = hlen - 1
    i = i+1

if chk==0:
    i = 0
    onum = []
    while dnum != 0:
        onum.insert(i, dnum % 8)
        i = i + 1
        dnum = int(dnum / 8)

    print("Output : ", end="")
    i = i - 1
    while i >= 0:
        print(onum[i], end="")
        i = i - 1
    print()
else:
    print("\nInvalid Input!")