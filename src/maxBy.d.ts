import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const maxBy: maxBy_000;
type maxBy_000 = {
    <T>(fn: Morphism<T, Ordered>): maxBy_100<T>;
    <T>(_fn: PH, a: T): maxBy_010<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): maxBy_110<T>;
    <T>(_fn: PH, _a: PH, b: T): maxBy_001<T>;
    <T>(_fn: PH, a: T, b: T): maxBy_011<T>;
    <T>(fn: Morphism<T, Ordered>, _a: PH, b: T): maxBy_101<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => maxBy_100<T>;
    <$SEL extends "01">(): <T>(_fn: PH, a: T) => maxBy_010<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Ordered>, a: T) => maxBy_110<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: T) => maxBy_001<T>;
    <$SEL extends "011">(): <T>(_fn: PH, a: T, b: T) => maxBy_011<T>;
    <$SEL extends "101">(): <T>(fn: Morphism<T, Ordered>, _a: PH, b: T) => maxBy_101<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, Ordered>, a: T, b: T) => maxBy_111<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): maxBy_111<T>;
};
type maxBy_100<T> = {
    (a: T): maxBy_110<T>;
    (_a: PH, b: T): maxBy_101<T>;
    <$SEL extends "1">(): (a: T) => maxBy_110<T>;
    <$SEL extends "01">(): (_a: PH, b: T) => maxBy_101<T>;
    <$SEL extends "11">(): (a: T, b: T) => maxBy_111<T>;
    (a: T, b: T): maxBy_111<T>;
};
type maxBy_010<T> = {
    (fn: Morphism<T, Ordered>): maxBy_110<T>;
    (_fn: PH, b: T): maxBy_011<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => maxBy_110<T>;
    <$SEL extends "01">(): (_fn: PH, b: T) => maxBy_011<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, b: T) => maxBy_111<T>;
    (fn: Morphism<T, Ordered>, b: T): maxBy_111<T>;
};
type maxBy_110<T> = {
    (b: T): maxBy_111<T>;
};
type maxBy_001<T> = {
    (fn: Morphism<T, Ordered>): maxBy_101<T>;
    (_fn: PH, a: T): maxBy_011<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => maxBy_101<T>;
    <$SEL extends "01">(): (_fn: PH, a: T) => maxBy_011<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, a: T) => maxBy_111<T>;
    (fn: Morphism<T, Ordered>, a: T): maxBy_111<T>;
};
type maxBy_101<T> = {
    (a: T): maxBy_111<T>;
};
type maxBy_011<T> = {
    (fn: Morphism<T, Ordered>): maxBy_111<T>;
};
type maxBy_111<T> = T;
export = maxBy;
