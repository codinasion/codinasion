#Calculate Compund Interest
#Input Values
princ=int(input("Principal : "))
rate=float(input("Rate      : "))/100
time=float(input("Time      : "))
ci=princ*(1+rate)**time
print("Compound Interest : ","%.2f" % ci)
