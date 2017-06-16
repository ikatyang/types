import * as R_mergeWith from 'ramda/src/mergeWith';

declare const string_string_to_number: (a: string, b: string) => number;
declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest
R_mergeWith(string_string_to_number, a_1);

// @dts-jest
R_mergeWith(string_string_to_number, a_1)(b_2);
// @dts-jest
R_mergeWith(string_string_to_number, a_1, b_2);

// @dts-jest
R_mergeWith(string_string_to_number, a_1)<{a: 1, b: 2}>(b_2);
// @dts-jest
R_mergeWith<any, {a: 1, b: 2}>(string_string_to_number, a_1, b_2);