void checkLower(String c){
  int ascii = c.codeUnitAt(0);
  if(ascii >= 97 && ascii <= 122){
    print("Character is in lower case.");
  }
  else{
    print("Character is not in lower case.");
  }
}

void main() {
  checkLower("s");
}