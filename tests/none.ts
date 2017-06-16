import {Predicate} from 'ramda/src/$types';
import * as R_none from 'ramda/src/none';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest
R_none(string_predicate)(string_array);
// @dts-jest
R_none(string_predicate, string_array);
