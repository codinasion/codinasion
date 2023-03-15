func sortedString(str: String) -> String {
    let strlower = str.lowercased()
    let str1 = strlower.sorted()
    let str2 = String(str1)
    return str2
}

func AreAnagram(str1: String, str2: String) -> Void{
    let str1 = sortedString(str: str1)
    let str2 = sortedString(str: str2)
    if str1 == str2 {
        print("Are Anagram")
    }
    else {
        print("Are not Anagram")
    }
}

AreAnagram(str1: "listen", str2: "silent")


