import { Placeholder as PH } from "./$placeholder";
declare const join: join_00;
type join_00 = {
    (separator: string): join_10;
    (_separator: PH, list: any[]): join_01;
    <$SEL extends "1">(): (separator: string) => join_10;
    <$SEL extends "01">(): (_separator: PH, list: any[]) => join_01;
    <$SEL extends "11">(): (separator: string, list: any[]) => join_11;
    (separator: string, list: any[]): join_11;
};
type join_10 = {
    (list: any[]): join_11;
};
type join_01 = {
    (separator: string): join_11;
};
type join_11 = string;
export = join;
