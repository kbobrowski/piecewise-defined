## piecewise-defined function generator

Small module to easily define piecewise functions

```js
const { Piecewise, PiecewiseGeneric } = require("piecewise-defined");

const pf = Piecewise()
  .add(x => x > 3 && x < 6, x => 2 * x)
  .add(x => x >= 6, x => x)
  .compile();

console.log(pf(4), pf(7), pf(3));

// prints out "8, 7, undefined"


const pfg = PiecewiseGeneric()
  .add(x => x.length < 3, x => x.reduce((a, b) => a+b, 0))
  .add(x => x.length >= 3, x => 0)
  .compile();

console.log(pfg([1,2]), pfg([1,2,3]));

// prints out "3 0"
```
