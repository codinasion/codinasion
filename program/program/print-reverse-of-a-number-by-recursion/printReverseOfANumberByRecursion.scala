def reverseIntList(x: Int): List[Int]  = {
    if (!(x <= 0))
      if ((x < 10))
        List(x)
      else
        x % 10 :: reverseIntList(x / 10)
    else
      List()

  }
  
  print(reverseIntList(123))
