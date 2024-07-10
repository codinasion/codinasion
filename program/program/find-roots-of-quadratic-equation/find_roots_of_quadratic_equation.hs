-- Haskell program to find roots of quadratic equation using the quadratic formula.

quadraticRoots :: Integral a => a -> a -> a -> (a, a)
quadraticRoots a b c
    | d >= 0    = (div (e + isqrt d) (2 * a), div (e - isqrt d) (2 * a)) -- Real roots
    | otherwise = (-1, -1)                                             -- Complex roots
    where
        d = b * b - 4 * a * c
        e = -b
        isqrt = floor . sqrt . fromIntegral

main :: IO ()
main = do
    let (root1, root2) = quadraticRoots 1 2 1
    putStrLn $ "Roots: " ++ show [root1, root2]
