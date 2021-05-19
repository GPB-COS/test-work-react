# random-natural

> Return a [natural number](https://en.wikipedia.org/wiki/Natural_number).

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-natural/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-natural/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-natural)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-natural/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-natural)


## Install

```
$ npm install --save random-natural
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-natural/blob/master/test/spec/index.js)

```js
var randomNatural = require('random-natural');

// API
// - randomNatural([options])

// options
// - min
// - max
```

By default it will return an integer between `0` and `9007199254740992`:

```js
randomNatural();
// => 9527
```

Can optionally provide min and max:

```js
randomNatural({ max: 5 });
// => 3

randomNatural({ min: 10, max: 100 });
// => 66
```

**Note**:

These `min` and `max` are **inclusive**, so they are included in the range.

This means `randomNatural({ min: 1, max: 3 })` would return either `1`, `2`, or `3`.

```js
// Specific case
1 <= random number <= 3

// General case
min <= random number <= max
```

## Related

- [random-integral](https://github.com/mock-end/random-integral) - Return a random integer.
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

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-natural/issues/new).
