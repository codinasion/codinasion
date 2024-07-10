printNumbers n = putStrLn (unwords (map show [n, n-1 .. 1]))

main = do
    let n = 5
    printNumbers n
