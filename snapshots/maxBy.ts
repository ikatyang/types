import * as R_maxBy from '../ramda/dist/src/maxBy';

declare const object_to_number: (x: object) => number;
declare const object: object;

// @dts-jest:pass -> (b: object) => object
R_maxBy(object_to_number, object);
// @dts-jest:pass -> object
R_maxBy(object_to_number)(object)(object);
// @dts-jest:pass -> object
R_maxBy(object_to_number, object, object);
