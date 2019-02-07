/**
 * Returns an array of integers in range [0..count]
 * @param count
 * @returns {number[]}
 */
export function intRange(count): number[] {
  return [...Array(count).keys()];
}

export function euclideanDistance(a, b): number {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

/**
 * Returns a flat array of array, where propertyGetter determines the inner property to be pulled out
 * @param {any[]} array
 * @param {Function} propertyGetter
 * @returns {T[]}
 */
export function flatMap<T>(array: any[], propertyGetter: Function = x => x): T[] {
  return array.reduce((acc, x) => acc.concat(propertyGetter(x)), []);
}
