main :: IO()
main = do
    let n = 5
    putStrLn . unwords . map show $ [1 .. n]