def main():
      seq = [12, 13, 1, 10, 34, 1]
      print(smallest_three_elements(seq))

def smallest_three_elements(S):
      """ Return the three smallest elements of sequence S """
      min1 = S[0]
      min2 = S[0]
      min3 = S[0]
      
      for val in S:
            if val < min1:
                  min3 = min2
                  min2 = min1
                  min1 = val
            elif val < min2:
                  min3 = min2
                  min2 = val
            elif val < min3:
                  min3 = val
      return (min1, min2, min3)

if __name__ == '__main__':
      main()