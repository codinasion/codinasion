bool checkPalin(String s){
  int l = 0;
  int r = s.length - 1;
  while(l < r){
    if(s[l] != s[r]){
      return false;
    }
    l += 1;
    r -= 1;
  }
  return true;
}

void main() {
  print(checkPalin("abqa"));
}