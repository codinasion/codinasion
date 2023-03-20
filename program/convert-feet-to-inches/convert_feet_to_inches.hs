module Main where

feetToInches :: Int -> Int
feetToInches i = i * 12

main :: IO ()
main = do
  -- Read a value from the user
  putStrLn "Enter a value in feet:"
  feet <- readLn
  -- Convert the value to inches and print the result
  let inches = feetToInches feet
  putStrLn $ show inches ++ " inches"
