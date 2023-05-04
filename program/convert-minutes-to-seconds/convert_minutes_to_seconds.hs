main :: IO ()
main = do 
   putStrLn "Enter minutes: " 
   input1 <- getLine
   let minutes = read input1 :: Float

   let seconds = minutes * 60
   putStrLn $ show (seconds)
