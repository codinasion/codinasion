import Data.List (sort)

-- Function to find the smallest two elements in a list
findSmallestTwoElements :: (Ord a) => [a] -> Maybe (a, a)
findSmallestTwoElements xs
    | length xs < 2 = Nothing  -- If the list has fewer than two elements, return Nothing
    | otherwise     = Just (head sortedList, head (tail sortedList))
    where sortedList = sort xs  -- Sort the list in ascending order

-- Main function to demonstrate the usage of findSmallestTwoElements
main :: IO ()
main = do
    let array = [5, 3, 1, 2, 4]
    case findSmallestTwoElements array of
        Just (smallest, secondSmallest) -> putStrLn $ "The smallest element is " ++ show smallest ++ " and the second smallest element is " ++ show secondSmallest
        Nothing -> putStrLn "Unable to find the smallest two elements."
