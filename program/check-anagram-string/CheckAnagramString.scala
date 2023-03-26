def areAnagram(str1: String, str2: String): Boolean =
  str1.sorted == str2.sorted

println(areAnagram("pan", "nap")) 
