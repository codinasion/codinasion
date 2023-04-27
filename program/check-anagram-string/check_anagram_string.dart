import 'dart:io';
import 'dart:core';

void main(){
    stdout.write("Enter first string: ");
    String? str1 = stdin.readLineSync();
    stdout.write("Enter second string: ");
    String? str2 = stdin.readLineSync();
    List <String> str1_lst = str1!.split('');
    List <String> str2_lst = str2!.split('');
    str1_lst.sort();
    str2_lst.sort();
    if (str1_lst.join() == str2_lst.join()){
        print("$str1 and $str2 are anagrams.");
    }
    else{
        print("$str1 and $str2 are not anagrams.");
    }
}