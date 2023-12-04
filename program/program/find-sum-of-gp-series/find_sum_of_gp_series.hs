-- Function to calculate the sum of a GP series
gpSum :: Double -> Double -> Int -> Double
gpSum a1 r n = a1 * (1 - r^n') / (1 - r)
    where n' = fromIntegral n

-- Main function
main :: IO ()
main = do
    putStrLn "Enter the first term, common ratio, and number of terms (separated by commas):"
    input <- getLine
    let [a1, r, n] = map read (wordsWhen (==',') input)

    -- Calculate the sum and print the result
    let result = gpSum a1 r (round n)
    putStrLn $ "Sum of the GP series: " ++ show result

-- Helper function to split a string into a list of words using a delimiter
wordsWhen :: (Char -> Bool) -> String -> [String]
wordsWhen p s = case dropWhile p s of
    "" -> []
    s' -> w : wordsWhen p s''
        where (w, s'') = break p s'
