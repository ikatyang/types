declare const equals: equals_00;
type equals_00 = {
    <T>(a: T): equals_10<T>;
    <T>(a: T, b: T): equals_11;
};
type equals_10<T> = {
    (b: T): equals_11;
};
type equals_01<T> = {
    (a: T): equals_11;
};
type equals_11 = boolean;
export = equals;
