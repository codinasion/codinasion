def convertDaysToHours(days: Int): Int = {
  var total_hours: Int = days * 24 ;
  return total_hours ;
};

var days_to_convert: Int = 5 ;
var hours:Int =  convertDaysToHours(days_to_convert) ; 
println(hours) ;
