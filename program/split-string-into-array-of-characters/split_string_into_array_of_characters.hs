-- String is aliased to [Char], thus no operation is needed to split a string into an array of chars

-- However, the expected output is ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]. 
-- Double quotes would indicate this is an array of strings. This operation can be performed as follows:

-- String into array of single-character strings
module Main where

characters :: [Char] -> [[Char]]
characters [] = []
characters (x:xs)
    | null xs = [[x]]
    | otherwise = [x]:characters xs

main :: IO ()
main = do
  let result = characters "Hii there"
  print result
