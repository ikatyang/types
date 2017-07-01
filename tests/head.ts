import * as R_head from '../ramda/dist/src/head';

declare const string: string;
declare const string_array: string[];
declare const number_array: number[];

// @dts-jest:pass
R_head(string);
// @dts-jest:pass
R_head(string_array);
// @dts-jest:pass
R_head(number_array);