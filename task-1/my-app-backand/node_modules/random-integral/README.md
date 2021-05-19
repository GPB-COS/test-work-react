# random-integral

> Return a random integer.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-integral/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-integral/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-integral)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-integral/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-integral)


## Install

```
$ npm install --save random-integral
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-integral/blob/master/test/spec/index.js)


```js
var randomInt = require('random-integral');

// API
// - randomInt([options])
```

By default it will return an integer between `-9007199254740992` and `9007199254740992`:

```js
randomInt();
// => -1293235
```

Can optionally provide min and max:

```js
randomInt({ max: 5 });
// => -33569

randomInt({ min: 10, max: 100 });
// => 66

randomInt({ min: -100, max: -10 });
// => -57
```

**Note**:

These `min` and `max` are **inclusive**, so they are included in the range.

This means `randomInt({ min: -2, max: 2 })` would return either `-2`, `-1`, `0`, `1`, or `2`.

```js
// Specific case
-2 <= random number <= 2

// General case
min <= random number <= max
```

## Related

- [random-natural](https://github.com/mock-end/random-natural) - Return a random natural number.
- [random-bool](https://github.com/mock-end/random-bool) - Return a random boolean (true/false).
- [random-char](https://github.com/mock-end/random-char) - Return a random char.
- [random-index](https://github.com/mock-end/random-index) - Return a random array-like index.
- [random-decimal](https://github.com/mock-end/random-decimal) - Return a random decimal.
- [random-binary](https://github.com/mock-end/random-binary) - Return a random binary number.
- [random-octal](https://github.com/mock-end/random-octal) - Return a random octal number.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Return a random hexadecimal number.
- [random-unicode](https://github.com/mock-end/random-unicode) - Return a random unicode. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-integral/issues/new).
