import Data.List (sort)

findLargestTwoElements :: (Ord a) => [a] -> (a, a)
findLargestTwoElements xs
  | length xs < 2 = error "List must contain at least two elements"
  | otherwise = (largest, secondLargest)
  where
    sortedList = sort xs
    largest = last sortedList
    secondLargest = last (init sortedList)

main :: IO ()
main = do
    let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    let (largest, secondLargest) = findLargestTwoElements arr
    putStrLn $ "The largest element is: " ++ show largest
    putStrLn $ "The second largest element is: " ++ show secondLargest
