function sumOfGP(a1: number, r: number, n: number): number {
    
    // Calculate the sum of the first n terms of the geometric progression
    const sum = (a1 * (1 - Math.pow(r, n))) / (1 - r);
  
    return sum;
  }

  //contributed by peleg mazuz