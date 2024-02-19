import datetime

#Function to convert standard input date into julian date
def stddate_to_jd (std_date):
    fmt='%Y-%m-%d'
    converted_date = datetime.datetime.strptime(std_date, fmt)
    converted_date = converted_date.timetuple()
    jul_date = str(converted_date.tm_year) + '' + str(converted_date.tm_yday)
    return(jul_date)

#Function to convert julian input date into standard date
def jd_to_stddate (jdate):
    fmt = '%Y%j'
    date_std = datetime.datetime.strptime(jdate, fmt).date()
    return(date_std)

	
print('Please provide input date to be converted : ')
input_date = input()

if len(input_date) == 10:
   return_val = stddate_to_jd(input_date)
   print("Converted date is : ", return_val)
elif len(input_date) == 7:
   return_val = jd_to_stddate(input_date)
   print("Converted date is : " ,return_val)
else:
   print("Incorrect format of date. Please provide correct format.")
