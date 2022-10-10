class Time:
    def GetTime(self):
        self.__h=int(input("Enter  Hrs: "))
        self.__m = int(input("Enter  Min: "))
        self.__s= int(input("Enter  Second: "))

    def  PutResult(self):
        print("{} Days {} Hours {} Minutes {} Seconds".format(self.__d,self.__h, self.__m, self.__s))
        
    def __add__(self, T):
        R=Time()
        R.__h=self.__h+T.__h
        R.__m=self.__m+T.__m
        R.__s=self.__s+T.__s

        R.__m=R.__m+(R.__s//60)
        R.__s=R.__s%60

        R.__h=R.__h+(R.__m//60)
        R.__m=R.__m%60

        R.__d=R.__h//24
        R.__h=R.__h%24

        return R
        
T1=Time()
T2=Time()

print("Enter value for Time object 1 : ")
T1.GetTime()

print("Enter value for Time object 2 : ")
T2.GetTime()

print("The total time elapsed is ", end = " ")
T3=T1+T2
T3.PutResult()
