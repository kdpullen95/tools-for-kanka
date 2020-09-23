/** Round to an arbitrary precision */
export function round(number, index) {
    const power = Math.pow(10, index);
    return Math.round(number * power)/power;
}