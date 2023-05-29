import Data.Fixed

cubeRoot :: Double -> Double
cubeRoot x = (cuberoot x) / 1
   where cuberoot = (** (1/3))

main :: IO ()
main = do
   let num = 27
   print (cubeRoot num)
