// JavaScript program to calculate the combination of n objects taken r at a time
// n!/(r!(n-r)!) = n(n-1)(n-2)...(n-r+1)/r!

function rng(a: number, b: number): number {
    var total = a,i = a;
 
  while (i++< b) {
    total*=i;
  }
    return total;
}

function cbn(n: number, r: number): number {
    if (n==r || r==0) 
    {
      return 1;
    }
    else {
        r=(r < n-r) ? n-r : r;
        return rng(r+1, n)/rng(1, n-r)
    }
}

console.log(cbn(5, 2));