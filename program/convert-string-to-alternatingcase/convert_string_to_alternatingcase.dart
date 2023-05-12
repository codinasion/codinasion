void alterCase(String s){
  s = s.toLowerCase();
  String answer = "";
  int cap = 0;
  for(var i = 0 ; i < s.length ; i++){
    if(s[i] == " "){
      answer += s[i];
      continue;
    }
    if(cap % 2 != 0){
      answer += s[i].toUpperCase();
    }
    else{
      answer += s[i];
    }
    cap += 1;
  }
  print(answer);
}


void main() {
  alterCase("Hello World");
}