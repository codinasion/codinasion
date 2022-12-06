const diamondPattern = (n) => {
   let total = n, iteration = 0;
   const construct = ['*'.repeat(n)];
   while((n-=2) > 0) {
      const layer = ' '.repeat(++iteration)+'*'.repeat(n);
      construct.unshift(layer); 
      construct.push(layer);   
   }
   construct.forEach((pattern) => console.log(pattern)); 
}

diamondPattern(11);
