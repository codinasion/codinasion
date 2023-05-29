fun anagramChecker(s: String, t: String): Boolean {
    if (s.length != t.length) return false

    val sMap = mutableMapOf<Char, Int>()
    val tMap = mutableMapOf<Char, Int>()

    for (i in s.indices){
        sMap[s[i]] = sMap.getOrDefault(s[i], 0) + 1
        tMap[t[i]] = tMap.getOrDefault(t[i], 0) + 1
    }

    for (ch in sMap.keys){
        if (sMap[ch] != tMap[ch]) return false
    }
    return true
}

//println(anagramChecker("pan", "nap"))