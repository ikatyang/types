import {Variadic} from 'ramda/src/$types';
import * as R_binary from 'ramda/src/binary';

declare const string_number_symbol_to_boolean: (a: string, b: number, c: symbol) => boolean;
declare const object_variadic: Variadic<object>;

// @dts-jest
R_binary(string_number_symbol_to_boolean);
// @dts-jest
R_binary(object_variadic);