import {List} from 'ramda/src/$types';
import * as R_slice from 'ramda/src/slice';

declare const number: number;
declare const string: string;
declare const object_list: List<object>;

// @dts-jest
R_slice(number)(number)(string);
// @dts-jest
R_slice(number, number, string);

// @dts-jest
R_slice(number)(number)(object_list);
// @dts-jest
R_slice(number, number, object_list);