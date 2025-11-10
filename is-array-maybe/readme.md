# is-array-maybe

It says whether something is an array or not… maybe.
(It always says “maybe” because it honestly has no idea.)

## How does it works?

```js
const isArrayMaybe = require("is-array-maybe");
const colors = ["red", "yellow", "blue"];

console.log("Is [] an array?", isArrayMaybe([]));               // -> maybe
console.log("Is {} an array?", isArrayMaybe({}));               // -> maybe
console.log('Is "hello" an array?', isArrayMaybe("hello"));     // -> maybe
console.log("What about colors?", isArrayMaybe(colors));        // -> maybe

```