/** Round to an arbitrary precision */
export function round(number, index) {
    const power = Math.pow(10, index);
    return Math.round(number * power)/power;
}

/**
 * Returns the last num entries in an array, filling 
 * null for entries that do not exist
 * @param {array} arr 
 * @param {int} num 
 */
export function previousEntries(arr, num) {
    if (arr.length < num) {
        arr = arr.slice();
        for (let i = arr.length; i < num; i++) {
            arr.unshift(null);
        }
    }
    return arr.slice(arr.length - num, arr.length);
}

/**
 * Generates random number [-0.5, 0.5)
 */
export function randomHalfUnit() {
    return randomPositiveUnit() - 1;
}

/**
 * Generates random number [-1, 1)
 */
export function randomUnit() {
    return randomPositiveUnit() * 2 - 1;
}

/**
 * Generates random number [0, 1)
 * Just Math.random() at the moment
 * TODO any tweak to inclusive
 */
export function randomPositiveUnit() {
    return Math.random();
}