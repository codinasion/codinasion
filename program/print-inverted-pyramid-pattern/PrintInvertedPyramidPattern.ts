const invertedPyramid = (num: number): number => {
  for(let n = num ;n>=1;n--){
      let str ='';
      for(let i = 1;i<=n;i++){
          str+=i + " "
      }
      console.log(str)
  }
}

invertedPyramid(5);
