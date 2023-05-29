def pangram (string)
   # downcase the string, scan it for letters of the alphabet (a-z), remove duplicates and examine the length of the returned array
   if string.downcase.scan(/[a-z]/).uniq.length == 26 
     puts "Pangram sentence"
   else
     puts "Not a Pangram sentence"
   end
end
