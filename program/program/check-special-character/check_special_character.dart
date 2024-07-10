void main() {
  final regExp = RegExp(
    r'[\^$*.\[\]{}()?\-"!@#%&/\,><:;_~`+='
    "'"
    ']'
  );
  
  final string = '@';

  if(string.contains(regExp))
    print("Special Character");
  else
    print("Not a Special Character");
}
