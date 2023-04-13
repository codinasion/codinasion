import Data.List
main = do
    putStrLn "enter word 1: "
    word1 <- getLine

    putStrLn "enter word 2: "
    word2 <- getLine
    
    putStrLn (toResult word1 word2)

toResult [] [] = "word1 and word2 are empty"
toResult [] word2 = "word1 is empty!"
toResult word1 [] = "word2 is empty!"

toResult word1 word2 
    | sort word1 == sort word2 = "Strings are Anagrams" 
    | otherwise = "Strings are not Anagrams"