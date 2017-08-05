import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const indexOf: indexOf_00;
type indexOf_00 = {
    <T>(target: T): indexOf_10<T>;
    <T>(_target: PH, list: List<T>): indexOf_01<T>;
    <$SEL extends "1">(): <T>(target: T) => indexOf_10<T>;
    <$SEL extends "01">(): <T>(_target: PH, list: List<T>) => indexOf_01<T>;
    <$SEL extends "11">(): <T>(target: T, list: List<T>) => indexOf_11;
    <T>(target: T, list: List<T>): indexOf_11;
};
type indexOf_10<T> = {
    (list: List<T>): indexOf_11;
};
type indexOf_01<T> = {
    (target: T): indexOf_11;
};
type indexOf_11 = number;
export = indexOf;
