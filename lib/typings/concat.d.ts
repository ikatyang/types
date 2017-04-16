/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns the result of concatenating the given lists or strings.
   *
   * Note: `R.concat` expects both arguments to be of the same type, unlike the native `Array.prototype.concat` method. It will throw an error if you `concat` an Array with a non-Array value.
   *
   * Dispatches to the `concat` method of the first argument, if present.
   */
  function concat<T, U>(array1: T[], array2: U[]): (T | U)[];
  function concat<U>(_array1: PH, array2: U[]): {
    <T>(array1: T[]): (T | U)[];
  };
  function concat<T>(array1: T[]): {
    <U>(array2: U[]): (T | U)[];
  };
  function concat<T, U>(array1: T[], array2: U[]): (T | U)[];

}
