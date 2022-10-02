let s="sachin";

function reverse(s){
    if (s === "")
    return "";
  else
    return reverse(s.substr(1)) + s.charAt(0);
}
console.log(reverse(s));
