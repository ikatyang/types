declare const mathMod: mathMod_00;
type mathMod_00 = {
    (a: number): mathMod_10;
    (a: number, b: number): mathMod_11;
};
type mathMod_10 = {
    (b: number): mathMod_11;
};
type mathMod_01 = {
    (a: number): mathMod_11;
};
type mathMod_11 = number;
export = mathMod;
