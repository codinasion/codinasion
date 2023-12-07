import { AsciiToDecimal } from "@codinasion/number-system";

const ascii = "Hello World";

const decimal = AsciiToDecimal(ascii);
console.log(decimal);

// Output
// [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
