function getOnes(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return ones[number] || '';
}

function getTeens(number) {
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  return teens[number] || '';
}

function getTens(number) {
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  return tens[number] || '';
}

function getHundreds(number) {
  if (number > 0 && number < 10) {
    return getOnes(number);
  }
  if (number >= 10 && number < 20) {
    return getTeens(number % 10);
  }
  if (number >= 20 && number < 100) {
    return `${getTens(Math.floor(number / 10))} ${getOnes(number % 10)}`;
  }
  return '';
}

function numberToWords(input) {
  const digits = Number(parseInt(input, 10));
  const result = [];

  if (digits === 0) {
    result.push('zero');
  } else if (digits === 1) {
    result.push('one');
  } else {
    const crores = Math.floor(digits / 10000000) % 100;
    if (crores > 0) {
      result.push(`${getHundreds(crores)} crore`);
    }

    const lakhs = Math.floor(digits / 100000) % 100;
    if (lakhs > 0) {
      result.push(`${getHundreds(lakhs)} lakh`);
    }

    const thousands = Math.floor(digits / 1000) % 100;
    if (thousands > 0) {
      result.push(`${getHundreds(thousands)} thousand`);
    }

    const hundreds = Math.floor((digits % 1000) / 100);
    if (hundreds > 0 && hundreds < 10) {
      result.push(`${getOnes(hundreds)} hundred`);
    }

    const tens = digits % 100;
    if (tens > 0) {
      if (digits > 100) result.push('and');
      result.push(`${getHundreds(tens)}`);
    }
  }

  return [...result].join(' ').split(/\s/).filter((e) => e).map((e) => e.substr(0, 1)
          .toUpperCase() + e.substr(1)).join(' ');
}


console.log(numberToWords(123456789));
