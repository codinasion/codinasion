const number = 2;
const pow = 3;

function power(num: number, exponent: number): number {
    return exponent == 0 ? 1 : num * power(num, exponent-1);
};

console.log("Number :", number);
console.log("Power :", pow);

console.log("Output :", power(number, pow));
