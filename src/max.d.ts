import { Ordered } from "./$types";
declare const max: max_00;
type max_00 = {
    <T extends Ordered>(a: T): max_10<T>;
    <T extends Ordered>(a: T, b: T): max_11<T>;
};
type max_10<T extends Ordered> = {
    (b: T): max_11<T>;
};
type max_01<T extends Ordered> = {
    (a: T): max_11<T>;
};
type max_11<T extends Ordered> = T;
export = max;
