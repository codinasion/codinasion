//program to print Floyd's triangle in swift lang.
let row=7  // change row value to see the change in Floyd's triangle length
var num=1  // initialize the number to be 1 
for x in 1...row{
  for _ in 1...x{
    //print and iterate num value
    print(num,terminator:" ")
    num+=1 
  }
  //move to next line
  print("")
}