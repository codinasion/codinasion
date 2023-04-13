import Data.Fixed

squareRoot :: Double -> Double
squareRoot x = (squareroot x) / 1
   where squareroot = (** (1/2))

main :: IO ()
main = do
   let num = 25
   print (squareRoot num)
