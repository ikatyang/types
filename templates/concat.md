Returns the result of concatenating the given lists or strings.

Note: `R.concat` expects both arguments to be of the same type, unlike the native `Array.prototype.concat` method. It will throw an error if you `concat` an Array with a non-Array value.

Dispatches to the `concat` method of the first argument, if present.