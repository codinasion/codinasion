reverse_list :: [Int] -> [Int]
reverse_list = \list ->
    case list of
        [] -> []
        x:xs -> reverse_list xs ++ [x]
main = print (reverse [1, 2, 3, 4, 5])
