def main():
      """
      Python program to move all zeroes at the end of the array  
      """
      
      move_zeroes([1, 2, 0, 4, 3, 0, 5, 0])

def move_zeroes(seq):
      l = 0
      for r in range(len(seq)):
            if seq[r]:                                          # if non-zero value
                  seq[l], seq[r] = seq[r], seq[l]               # swap
                  l += 1                                          # increment l
      print(seq)

if __name__ == '__main__':
      main()
