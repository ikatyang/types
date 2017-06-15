import * as R_contains from 'ramda/src/contains';

declare const string: string;
declare const string_array: string[];

// @dts-jest
R_contains(string);
// @dts-jest
R_contains(string, string);
// @dts-jest
R_contains(string, string_array);