export default (num) => {
    const length = num.toString().length;
    const digits = num.toString().split('');
    const realDigits = digits.map(Number);
    if (length % 2 === 0) {
        const firstPart = realDigits
            .filter((val, index) => index < realDigits.length / 2);
        const secondPartReversed = realDigits
            .filter((val, index) => index >= realDigits.length / 2)
            .reverse();
        const firstPartNumber = Number(firstPart
            .map((val) => val.toString())
            .join(''));
        const secondPartReversedNumber = Number(secondPartReversed
            .map((val) => val.toString())
            .join(''));
        return firstPartNumber === secondPartReversedNumber ? 'Palindrome Number' : 'Not Palindrome Number';
    } else {
        const firstPart = realDigits
            .filter((val, index) => index < Math.ceil(realDigits.length / 2));
        const secondPartReversed = realDigits
            .filter((val, index) => index >= Math.ceil(realDigits.length / 2 - 1))
            .reverse();
        const firstPartNumber = Number(firstPart
            .map((val) => val.toString())
            .join(''));
        const secondPartReversedNumber = Number(secondPartReversed
            .map((val) => val.toString())
            .join(''));
        return firstPartNumber === secondPartReversedNumber ? 'Palindrome Number' : 'Not Palindrome Number';
    }
};
