import {Placeholder} from '../ramda/dist/src/$placeholder';
import * as R_propSatisfies from '../ramda/dist/src/propSatisfies';

declare const number_to_boolean: (x: number) => boolean;
declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass -> (object: Record<"a", any>) => boolean
R_propSatisfies(number_to_boolean, 'a');
// @dts-jest:pass -> boolean
R_propSatisfies(number_to_boolean, 'a')(a_b_number_record);

// @dts-jest:pass -> boolean
R_propSatisfies(number_to_boolean, 'a', a_b_number_record);

// @dts-jest:pass -> (key: "a" | "b") => boolean
R_propSatisfies(number_to_boolean, placeholder, a_b_number_record);
// @dts-jest:pass -> boolean
R_propSatisfies(number_to_boolean, placeholder, a_b_number_record)('a');
