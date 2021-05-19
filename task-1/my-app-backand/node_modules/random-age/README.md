# random-age

> Generate a random age.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-age/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-age/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-age)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-age/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-age)


## Install

```
$ npm install --save random-age 
```

## Usage

```js
var randomAge = require('random-age');

// API
// - randomAge();
// - randomAge([options]);
```

Default range is between `1` and `120`:

```js
randomAge();
// => 45
```

Optionally specify one of a handful of enumerated age types:


```js
randomAge({ type: 'child' });
// => 9
```

Allowed types are: `child`, `teen`, `adult`, `senior`.


## Related

- [random-birthday](https://github.com/mock-end/random-birthday) - Generate a random birthday. 
- [random-firstName](https://github.com/mock-end/random-firstName) - Generate a random first name. 
- [random-lastName](https://github.com/mock-end/random-lastName) - Generate a random last name. 
- [random-fullName](https://github.com/mock-end/random-fullName) - Generate a random full name. 


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-age/issues/new).

