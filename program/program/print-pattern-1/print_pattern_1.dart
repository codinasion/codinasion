import 'dart:io';
void printPattern(int n){
  for(var i = 1 ; i <= n ; i++){
    for(var j = 1 ; j <= i ; j++){
     stdout.write(j);
    }
    stdout.write("\n");
  }
}

void main() {
  printPattern(5);
}