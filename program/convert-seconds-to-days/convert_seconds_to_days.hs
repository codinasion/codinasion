main :: IO ()
main = do 
   putStrLn "Enter seconds: " 
   input1 <- getLine
   let seconds = read input1 :: Float

   let days = seconds / 86400
   putStrLn $ show (days)
