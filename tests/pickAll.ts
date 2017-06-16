import * as R_pickAll from 'ramda/src/pickAll';

declare const object: object;
declare const string: string;

// @dts-jest
R_pickAll([string])(object);
// @dts-jest
R_pickAll([string], object);

// @dts-jest
R_pickAll([string])<Record<string, string>>(object);
// @dts-jest
R_pickAll<Record<string, string>>([string], object);