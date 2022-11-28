a = 0
b = 1
itr = 0
pos  = parse(UInt8, readline())

while itr < pos
    print(a, " ")
    c = a + b
    global a = b
    global b = c
    global itr += 1
end
