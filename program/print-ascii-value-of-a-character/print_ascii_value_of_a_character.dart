void convertToAscii(String c){
  int ascii = c.codeUnitAt(0);
  print(ascii);
}

void main() {
  convertToAscii("s");
}