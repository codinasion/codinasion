import 'dart:io';
void main(){
    stdout.write("Input: ");

    var output_miles = (int.parse(stdin.readLineSync()!)/63360);
    print("Output: ${output_miles.toInt()}");
}