import * as R_intersectionWith from 'ramda/src/intersectionWith';

declare const number_number_to_boolean: (a: number, b: number) => boolean;
declare const number_array: number[];

// @dts-jest
R_intersectionWith(number_number_to_boolean, number_array);
// @dts-jest
R_intersectionWith(number_number_to_boolean, number_array, number_array);