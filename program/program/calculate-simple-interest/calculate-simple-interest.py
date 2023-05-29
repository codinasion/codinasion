def simpleInterest():
    principal = int(input("Enter principal:- "))
    interest = int(input("Enter interest:- "))
    time = int(input("Enter time:- "))

    return (principal * interest * time) / 100


print(simpleInterest())
