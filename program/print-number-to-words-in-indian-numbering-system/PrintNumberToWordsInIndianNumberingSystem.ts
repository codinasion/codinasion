function getOnes(num: number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return ones[num] || '';
  }
  
  function getTeens(num: number) {
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    return teens[num] || '';
  }
  
  function getTens(num: number) {
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    return tens[num] || '';
  }
  
  function getHundreds(num: number) {
    if (num > 0 && num < 10) {
      return getOnes(num);
    }
    if (num >= 10 && num < 20) {
      return getTeens(num % 10);
    }
    if (num >= 20 && num < 100) {
      return `${getTens(Math.floor(num / 10))} ${getOnes(num % 10)}`;
    }
    return '';
  }
  
  function numberToWords(num: number) {
    // const digits = Number(parseInt(num, 10));
    // const digits = num;
    const result: string[] = [];
  
    if (num === 0) {
      result.push('zero');
    } else if (num === 1) {
      result.push('one');
    } else {
      const crores = Math.floor(num / 10000000) % 100;
      if (crores > 0) {
        result.push(`${getHundreds(crores)} crore`);
      }
  
      const lakhs = Math.floor(num / 100000) % 100;
      if (lakhs > 0) {
        result.push(`${getHundreds(lakhs)} lakh`);
      }
  
      const thousands = Math.floor(num / 1000) % 100;
      if (thousands > 0) {
        result.push(`${getHundreds(thousands)} thousand`);
      }
  
      const hundreds = Math.floor((num % 1000) / 100);
      if (hundreds > 0 && hundreds < 10) {
        result.push(`${getOnes(hundreds)} hundred`);
      }
  
      const tens = num % 100;
      if (tens > 0) {
        if (num > 100) result.push('and');
        result.push(`${getHundreds(tens)}`);
      }
    }
  
    return [...result].join(' ').split(/\s/).filter((e) => e).map((e) => e.substring(0, 1)
            .toUpperCase() + e.substring(1)).join(' ');
  }
  
  
  console.log(numberToWords(123456789));
  