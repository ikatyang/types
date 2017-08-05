import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const insertAll: insertAll_000;
type insertAll_000 = {
    (index: number): insertAll_100;
    <T>(_index: PH, values: List<T>): insertAll_010<T>;
    <T>(index: number, values: List<T>): insertAll_110<T>;
    <U>(_index: PH, _values: PH, list: List<U>): insertAll_001<U>;
    <T, U>(_index: PH, values: List<T>, list: List<U>): insertAll_011<T, U>;
    <U>(index: number, _values: PH, list: List<U>): insertAll_101<U>;
    <$SEL extends "1">(): (index: number) => insertAll_100;
    <$SEL extends "01">(): <T>(_index: PH, values: List<T>) => insertAll_010<T>;
    <$SEL extends "11">(): <T>(index: number, values: List<T>) => insertAll_110<T>;
    <$SEL extends "001">(): <U>(_index: PH, _values: PH, list: List<U>) => insertAll_001<U>;
    <$SEL extends "011">(): <T, U>(_index: PH, values: List<T>, list: List<U>) => insertAll_011<T, U>;
    <$SEL extends "101">(): <U>(index: number, _values: PH, list: List<U>) => insertAll_101<U>;
    <$SEL extends "111">(): <T, U>(index: number, values: List<T>, list: List<U>) => insertAll_111<T, U>;
    <T, U>(index: number, values: List<T>, list: List<U>): insertAll_111<T, U>;
};
type insertAll_100 = {
    <T>(values: List<T>): insertAll_110<T>;
    <U>(_values: PH, list: List<U>): insertAll_101<U>;
    <$SEL extends "1">(): <T>(values: List<T>) => insertAll_110<T>;
    <$SEL extends "01">(): <U>(_values: PH, list: List<U>) => insertAll_101<U>;
    <$SEL extends "11">(): <T, U>(values: List<T>, list: List<U>) => insertAll_111<T, U>;
    <T, U>(values: List<T>, list: List<U>): insertAll_111<T, U>;
};
type insertAll_010<T> = {
    (index: number): insertAll_110<T>;
    <U>(_index: PH, list: List<U>): insertAll_011<T, U>;
    <$SEL extends "1">(): (index: number) => insertAll_110<T>;
    <$SEL extends "01">(): <U>(_index: PH, list: List<U>) => insertAll_011<T, U>;
    <$SEL extends "11">(): <U>(index: number, list: List<U>) => insertAll_111<T, U>;
    <U>(index: number, list: List<U>): insertAll_111<T, U>;
};
type insertAll_110<T> = {
    <U>(list: List<U>): insertAll_111<T, U>;
};
type insertAll_001<U> = {
    (index: number): insertAll_101<U>;
    <T>(_index: PH, values: List<T>): insertAll_011<T, U>;
    <$SEL extends "1">(): (index: number) => insertAll_101<U>;
    <$SEL extends "01">(): <T>(_index: PH, values: List<T>) => insertAll_011<T, U>;
    <$SEL extends "11">(): <T>(index: number, values: List<T>) => insertAll_111<T, U>;
    <T>(index: number, values: List<T>): insertAll_111<T, U>;
};
type insertAll_101<U> = {
    <T>(values: List<T>): insertAll_111<T, U>;
};
type insertAll_011<T, U> = {
    (index: number): insertAll_111<T, U>;
};
type insertAll_111<T, U> = (T | U)[];
export = insertAll;
