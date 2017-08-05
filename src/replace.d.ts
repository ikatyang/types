import { Placeholder as PH } from "./$placeholder";
declare const replace: replace_000;
type replace_000 = {
    (pattern: RegExp | string): replace_100;
    (_pattern: PH, replacement: string): replace_010;
    (pattern: RegExp | string, replacement: string): replace_110;
    (_pattern: PH, _replacement: PH, str: string): replace_001;
    (_pattern: PH, replacement: string, str: string): replace_011;
    (pattern: RegExp | string, _replacement: PH, str: string): replace_101;
    <$SEL extends "1">(): (pattern: RegExp | string) => replace_100;
    <$SEL extends "01">(): (_pattern: PH, replacement: string) => replace_010;
    <$SEL extends "11">(): (pattern: RegExp | string, replacement: string) => replace_110;
    <$SEL extends "001">(): (_pattern: PH, _replacement: PH, str: string) => replace_001;
    <$SEL extends "011">(): (_pattern: PH, replacement: string, str: string) => replace_011;
    <$SEL extends "101">(): (pattern: RegExp | string, _replacement: PH, str: string) => replace_101;
    <$SEL extends "111">(): (pattern: RegExp | string, replacement: string, str: string) => replace_111;
    (pattern: RegExp | string, replacement: string, str: string): replace_111;
};
type replace_100 = {
    (replacement: string): replace_110;
    (_replacement: PH, str: string): replace_101;
    <$SEL extends "1">(): (replacement: string) => replace_110;
    <$SEL extends "01">(): (_replacement: PH, str: string) => replace_101;
    <$SEL extends "11">(): (replacement: string, str: string) => replace_111;
    (replacement: string, str: string): replace_111;
};
type replace_010 = {
    (pattern: RegExp | string): replace_110;
    (_pattern: PH, str: string): replace_011;
    <$SEL extends "1">(): (pattern: RegExp | string) => replace_110;
    <$SEL extends "01">(): (_pattern: PH, str: string) => replace_011;
    <$SEL extends "11">(): (pattern: RegExp | string, str: string) => replace_111;
    (pattern: RegExp | string, str: string): replace_111;
};
type replace_110 = {
    (str: string): replace_111;
};
type replace_001 = {
    (pattern: RegExp | string): replace_101;
    (_pattern: PH, replacement: string): replace_011;
    <$SEL extends "1">(): (pattern: RegExp | string) => replace_101;
    <$SEL extends "01">(): (_pattern: PH, replacement: string) => replace_011;
    <$SEL extends "11">(): (pattern: RegExp | string, replacement: string) => replace_111;
    (pattern: RegExp | string, replacement: string): replace_111;
};
type replace_101 = {
    (replacement: string): replace_111;
};
type replace_011 = {
    (pattern: RegExp | string): replace_111;
};
type replace_111 = string;
export = replace;
