import * as R_assoc from '../ramda/dist/src/assoc';

declare const symbol_property: symbol;
declare const string_property: string;
declare const number_value: number;
declare const object: object;

// @dts-jest:pass
R_assoc(symbol_property, number_value, object);
// @dts-jest:pass
R_assoc(symbol_property)(number_value)(object);

// @dts-jest:pass
R_assoc(string_property, number_value, object);
// @dts-jest:pass
R_assoc(string_property)(number_value)(object);
