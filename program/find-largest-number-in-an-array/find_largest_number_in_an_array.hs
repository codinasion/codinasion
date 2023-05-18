maxNum :: Ord a => [a] -> a
maxNum [x] = x
maxNum (x:x':xs) = maxNum ((if x >= x' then x else x'):xs)

main = print (maxNum [1, 2, 3, 4, 5])
