import Data.Char (toLower, toUpper)

-- Function to convert a string to alternating case
toAlternatingCase :: String -> String
toAlternatingCase = go True
  where
    go _ [] = []
    go toLowerCase (x:xs)
      | toLowerCase && x /= ' ' = toLower x : go (not toLowerCase) xs
      | x /= ' ' = toUpper x : go (not toLowerCase) xs
      | otherwise = x : go toLowerCase xs

-- Main function to demonstrate the conversion
main :: IO ()
main = do
  let input = "hello world"
  putStrLn $ toAlternatingCase input
