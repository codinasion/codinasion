import { decimalToBinary } from './decimal-to-binary';

describe('decimalToBinary', () => {
  it('should convert decimal numbers to binary strings correctly', () => {
    expect(decimalToBinary(10)).toBe("1010");
    expect(decimalToBinary(15)).toBe("1111");
    expect(decimalToBinary(16)).toBe("10000");
    expect(decimalToBinary(0)).toBe("0");
    expect(decimalToBinary(1)).toBe("1");
    expect(decimalToBinary(255)).toBe("11111111");
  });
});