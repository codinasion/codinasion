func sortedString(str: String) -> String {
    let str1 = str.sorted()
    let str2 = String(str1)
    return str2
}

func AreAnagram(str1: String, str2: String){
    let str1lowerCase = str1.lowercased()
    let str2lowerCase = str2.lowercased()
    let str1 = sortedString(str: str1lowerCase)
    let str2 = sortedString(str: str2lowerCase)
    if str1 == str2 {
        print("Are Anagram")
    }
    else {
        print("Are not Anagram")
    }
}

AreAnagram(str1: "listen", str2: "SiLent")


