const conversionFactor = 1609.344;

const convertMilesToMeters = (miles) => {
    const milesToMeters = miles * conversionFactor;
    return milesToMeters;
};

console.log(convertMilesToMeters(5));
