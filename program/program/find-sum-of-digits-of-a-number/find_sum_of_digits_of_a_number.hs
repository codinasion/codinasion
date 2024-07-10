main :: IO ()
main = do
  putStrLn "Enter your number containing String: "
  input <- getLine
  print (sumOfDigitOfANumber input)

sumOfDigitOfANumber :: String -> Int
sumOfDigitOfANumber str = sum $ stringToIntList str

stringToIntList :: String -> [Int]
stringToIntList = map (\c -> read [c] :: Int)