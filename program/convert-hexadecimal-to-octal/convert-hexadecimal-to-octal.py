def HexToOct(h):
    return oct(int(h, 16))

print("Input  : ", end="")
hnum = input()

onum = HexToOct(hnum)
print("Output : ", onum[2:])
