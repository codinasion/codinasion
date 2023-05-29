export type Miles = number
export type Feets = number

export function convertMilesToFeet(miles: Miles): Feets {
    return miles * 5280
}