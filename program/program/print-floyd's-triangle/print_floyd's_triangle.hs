floyd :: Int -> IO ()
floyd n = mapM_ putStrLn [concatMap showWithSpace [k..k+i] | (i,k) <- zip [0..n-1] (scanl (+) 1 [1..n-1])]
  where showWithSpace x = show x ++ " "

main :: IO ()
main = do
  putStrLn "Enter the number of rows:"
  n <- readLn
  floyd n
