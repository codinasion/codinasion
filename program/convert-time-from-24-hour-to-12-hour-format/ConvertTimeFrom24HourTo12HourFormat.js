function convertTime(time) {
    let splitTime = time.split(":");
    let hours = Number(splitTime[0]);
    let minutes;
    if(splitTime[1]){
      minutes = splitTime[1];
    }else{
      minutes = "00";
    }
    if(hours < Number("12")){
      if(hours === Number("0")){
        hours = "12";
      }
      return hours + ":" + minutes + " AM";
    }else if(hours === Number("12")){
      return hours + ":" + minutes + " PM";
    }else{
      hours = hours - "12";
      if(hours === Number("12")){
        return hours + ":" + minutes + " AM";
      }
      return hours + ":" + minutes + " PM";
    }
  }
  
  console.log(convertTime("0:05"));
  console.log(convertTime("1:45"));
  console.log(convertTime("13"));
  console.log(convertTime("1:24"));
  console.log(convertTime("22"));
  
