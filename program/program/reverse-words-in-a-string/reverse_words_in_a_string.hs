reverseWords :: String -> String
reverseWords sentence = unwords . reverse . words $ sentence

main :: IO ()
main = do
    let sentence = "Hello world this is a test"
    let reversedSentence = reverseWords sentence
    putStrLn $ "Original sentence: " ++ sentence
    putStrLn $ "Reversed words: " ++ reversedSentence
