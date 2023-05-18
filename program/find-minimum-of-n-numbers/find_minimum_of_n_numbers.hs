minNum:: Ord b => [b]-> b
minNum [x] = x
minNum (x:x':xs) = minNum ((if x <= x' then x else x'):xs)

main = print (minNum [10, 20, 30, 40, 50])
