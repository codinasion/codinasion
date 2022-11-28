def ConvertSectoDay(n):
    
    seconds = n*60;
 
    days = seconds // (24 * 3600)
     
    print(days)
 
n = int(input())
ConvertSectoDay(n)
