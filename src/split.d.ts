import { Placeholder as PH } from "./$placeholder";
declare const split: split_00;
type split_00 = {
    (separator: RegExp | string): split_10;
    (_separator: PH, str: string): split_01;
    <$SEL extends "1">(): (separator: RegExp | string) => split_10;
    <$SEL extends "01">(): (_separator: PH, str: string) => split_01;
    <$SEL extends "11">(): (separator: RegExp | string, str: string) => split_11;
    (separator: RegExp | string, str: string): split_11;
};
type split_10 = {
    (str: string): split_11;
};
type split_01 = {
    (separator: RegExp | string): split_11;
};
type split_11 = string[];
export = split;
