import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const innerJoin: innerJoin_000;
type innerJoin_000 = {
    <T, U>(pred: (a: T, b: U) => boolean): innerJoin_100<T, U>;
    <T>(_pred: PH, xs: List<T>): innerJoin_010<T>;
    <T, U>(pred: (a: T, b: U) => boolean, xs: List<T>): innerJoin_110<T, U>;
    <U>(_pred: PH, _xs: PH, ys: List<U>): innerJoin_001<U>;
    <T, U>(_pred: PH, xs: List<T>, ys: List<U>): innerJoin_011<T, U>;
    <T, U>(pred: (a: T, b: U) => boolean, _xs: PH, ys: List<U>): innerJoin_101<T, U>;
    <$SEL extends "1">(): <T, U>(pred: (a: T, b: U) => boolean) => innerJoin_100<T, U>;
    <$SEL extends "01">(): <T>(_pred: PH, xs: List<T>) => innerJoin_010<T>;
    <$SEL extends "11">(): <T, U>(pred: (a: T, b: U) => boolean, xs: List<T>) => innerJoin_110<T, U>;
    <$SEL extends "001">(): <U>(_pred: PH, _xs: PH, ys: List<U>) => innerJoin_001<U>;
    <$SEL extends "011">(): <T, U>(_pred: PH, xs: List<T>, ys: List<U>) => innerJoin_011<T, U>;
    <$SEL extends "101">(): <T, U>(pred: (a: T, b: U) => boolean, _xs: PH, ys: List<U>) => innerJoin_101<T, U>;
    <$SEL extends "111">(): <T, U>(pred: (a: T, b: U) => boolean, xs: List<T>, ys: List<U>) => innerJoin_111<T>;
    <T, U>(pred: (a: T, b: U) => boolean, xs: List<T>, ys: List<U>): innerJoin_111<T>;
};
type innerJoin_100<T, U> = {
    (xs: List<T>): innerJoin_110<T, U>;
    (_xs: PH, ys: List<U>): innerJoin_101<T, U>;
    <$SEL extends "1">(): (xs: List<T>) => innerJoin_110<T, U>;
    <$SEL extends "01">(): (_xs: PH, ys: List<U>) => innerJoin_101<T, U>;
    <$SEL extends "11">(): (xs: List<T>, ys: List<U>) => innerJoin_111<T>;
    (xs: List<T>, ys: List<U>): innerJoin_111<T>;
};
type innerJoin_010<T> = {
    <U>(pred: (a: T, b: U) => boolean): innerJoin_110<T, U>;
    <U>(_pred: PH, ys: List<U>): innerJoin_011<T, U>;
    <$SEL extends "1">(): <U>(pred: (a: T, b: U) => boolean) => innerJoin_110<T, U>;
    <$SEL extends "01">(): <U>(_pred: PH, ys: List<U>) => innerJoin_011<T, U>;
    <$SEL extends "11">(): <U>(pred: (a: T, b: U) => boolean, ys: List<U>) => innerJoin_111<T>;
    <U>(pred: (a: T, b: U) => boolean, ys: List<U>): innerJoin_111<T>;
};
type innerJoin_110<T, U> = {
    (ys: List<U>): innerJoin_111<T>;
};
type innerJoin_001<U> = {
    <T>(pred: (a: T, b: U) => boolean): innerJoin_101<T, U>;
    <T>(_pred: PH, xs: List<T>): innerJoin_011<T, U>;
    <$SEL extends "1">(): <T>(pred: (a: T, b: U) => boolean) => innerJoin_101<T, U>;
    <$SEL extends "01">(): <T>(_pred: PH, xs: List<T>) => innerJoin_011<T, U>;
    <$SEL extends "11">(): <T>(pred: (a: T, b: U) => boolean, xs: List<T>) => innerJoin_111<T>;
    <T>(pred: (a: T, b: U) => boolean, xs: List<T>): innerJoin_111<T>;
};
type innerJoin_101<T, U> = {
    (xs: List<T>): innerJoin_111<T>;
};
type innerJoin_011<T, U> = {
    (pred: (a: T, b: U) => boolean): innerJoin_111<T>;
};
type innerJoin_111<T> = T[];
export = innerJoin;
