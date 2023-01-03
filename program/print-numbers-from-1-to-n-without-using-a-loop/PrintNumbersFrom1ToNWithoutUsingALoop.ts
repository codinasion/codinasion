const print1ToN = (n: number): number => {
 n > 1 && print1ToN(n - 1);
 console.log(n);
}

print1ToN(5)
