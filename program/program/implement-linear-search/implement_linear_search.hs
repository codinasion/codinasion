-- Linear search in Haskell
linearSearch :: (Eq a) => [a] -> a -> Maybe Int
linearSearch list value = search list value 0
  where
    search [] _ _ = Nothing
    search (x:xs) v index
      | x == v    = Just index
      | otherwise = search xs v (index + 1)

-- Example usage
main :: IO ()
main = do
    let list = [64, 25, 12, 22, 11]
    let value = 22
    let result = linearSearch list value
    case result of
        Just index -> putStrLn $ "Value found at index: " ++ show index
        Nothing    -> putStrLn "Value not found in the list"
