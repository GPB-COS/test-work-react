# random-birthday

> Generate a random birthday.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-birthday/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-birthday/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-birthday)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-birthday/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-birthday)


## Install

```
$ npm install --save random-birthday 
```

## Usage

```js
var randomBirthday = require('random-birthday');

// API
// - randomBirthday([options]);

// options
// - type
// - min
// - max
```

By default, returns an actual JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object.

```js
randomBirthday();
// => Wed Apr 25 1984 00:00:00 GMT+0800 (CST)
```

Optionally specify the type, allowed types are: `child`, `teen`, `adult`, `senior`.

```js
randomBirthday({ type: 'child' });
// => Tue Apr 25 2000 00:00:00 GMT+0800 (CST)
```

Optionally specify the `min` and `max` for the year:

```js
randomBirthday({ min: 1980, max: 2000 })
// => Sun Apr 25 1999 00:00:00 GMT+0800 (CST)
```

## Related

- [random-birthday](https://github.com/mock-end/random-birthday) - Generate a random birthday. 
- [random-firstName](https://github.com/mock-end/random-firstName) - Generate a random first name. 
- [random-lastName](https://github.com/mock-end/random-lastName) - Generate a random last name. 
- [random-fullName](https://github.com/mock-end/random-fullName) - Generate a random full name. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-birthday/issues/new).
