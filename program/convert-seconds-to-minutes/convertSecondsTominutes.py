import math
seconds = 1000;
minutes = math.floor(seconds / 60);
extraSeconds = seconds % 60;
if minutes < 10:
    minutes =  "0" + str(minutes)
        
if extraSeconds < 10:
    extraSeconds =  "0" + str(extraSeconds) 
        
print(f"{minutes}mins : {extraSeconds}secs");