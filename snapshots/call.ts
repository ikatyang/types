import * as R_call from '../ramda/dist/src/call';

declare const number_and_string_to_boolean: (a: number, b: string) => boolean;
declare const number_and_string: [number, string];

// @dts-jest:pass -> boolean
R_call(number_and_string_to_boolean, ...number_and_string);
