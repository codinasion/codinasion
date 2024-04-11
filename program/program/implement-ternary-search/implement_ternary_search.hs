ternarySearch :: Ord a => [a] -> a -> Int -> Int -> Maybe Int
ternarySearch arr value l r
    | l > r = Nothing
    | otherwise = 
        let partitionSize = (r - l) `div` 3
            mid1 = l + partitionSize
            mid2 = r - partitionSize
        in if (arr !! mid1) == value then Just mid1
           else if (arr !! mid2) == value then Just mid2
           else if value < (arr !! mid1) then ternarySearch arr value l (mid1 - 1)
           else if value > (arr !! mid2) then ternarySearch arr value (mid2 + 1) r
           else ternarySearch arr value (mid1 + 1) (mid2 - 1)

-- Helper function to handle 0-based indexing
ternarySearchWrapper :: Ord a => [a] -> a -> Maybe Int
ternarySearchWrapper arr value = ternarySearch arr value 0 (length arr - 1)

main :: IO ()
main = do
    let list = [1,2,3,4,5]
        value = 4
        result = ternarySearchWrapper list value
    case result of
        Just index -> putStrLn $ "Element found at index: " ++ show index
        Nothing -> putStrLn "Element not found in the array"
