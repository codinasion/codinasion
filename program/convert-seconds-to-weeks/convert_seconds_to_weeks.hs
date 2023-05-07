main :: IO ()
main = do 
   putStrLn "Enter seconds: " 
   input1 <- getLine
   let seconds = read input1 :: Float

   let weeks = seconds / 604800
   putStrLn $ show (weeks)
