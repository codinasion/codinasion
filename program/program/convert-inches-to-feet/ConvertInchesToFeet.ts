const ConvertInchesToFeet = (Inches: number): number => {
    const result: number = parseFloat((Inches / 12).toFixed(2));
    return result;
}
export default ConvertInchesToFeet;