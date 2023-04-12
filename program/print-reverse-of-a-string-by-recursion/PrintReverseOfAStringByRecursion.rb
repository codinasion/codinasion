def reverseRecursive(s)
    return s if s.length <= 1
    last = s[-1]
    rest = s[0...-1]
    rest = reverseRecursive(rest)
    return last + rest
end

puts(reverseRecursive("abcd"))
