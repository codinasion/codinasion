import Data.List (foldl')

-- Function to find the smallest three elements
findSmallestThree :: [Int] -> [Int]
findSmallestThree arr
    | length arr < 3 = error "Array should have at least 3 elements"
    | otherwise = let (a, b, c) = foldl' update (maxBound, maxBound, maxBound) arr
                  in [a, b, c]
  where
    update :: (Int, Int, Int) -> Int -> (Int, Int, Int)
    update (first, second, third) x
        | x < first  = (x, first, second)
        | x < second = (first, x, second)
        | x < third  = (first, second, x)
        | otherwise  = (first, second, third)

-- Example usage
main :: IO ()
main = do
    let arr = [12, 13, 1, 10, 34, 1]
    let smallestThree = findSmallestThree arr
    putStrLn $ "The smallest three elements are: " ++ show smallestThree
