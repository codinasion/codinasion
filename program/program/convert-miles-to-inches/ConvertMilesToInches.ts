/**
 * 1 mile = 63360 inches
 * @param {number} miles
 * @returns {number} converstion of miles to inches
 */

const ONE_MILE_PER_INCH:number = 63360;

export function convertMilesToInches(miles: number): number {
    return miles * ONE_MILE_PER_INCH
}
