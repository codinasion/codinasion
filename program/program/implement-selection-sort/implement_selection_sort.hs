-- Selection sort in Haskell
selectionSort :: (Ord a) => [a] -> [a]
selectionSort [] = []
selectionSort xs = let minElem = minimum xs
                       rest = removeFirst minElem xs
                   in minElem : selectionSort rest

-- Function to remove the first occurrence of an element from a list
removeFirst :: (Eq a) => a -> [a] -> [a]
removeFirst _ [] = []
removeFirst y (x:xs)
    | y == x    = xs
    | otherwise = x : removeFirst y xs

-- Example usage
main :: IO ()
main = do
    let unsortedList = [64, 25, 12, 22, 11]
    let sortedList = selectionSort unsortedList
    putStrLn $ "Sorted list: " ++ show sortedList
