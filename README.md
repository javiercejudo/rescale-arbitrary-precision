# rescale-arbitrary-precision

[![Build Status](https://travis-ci.org/javiercejudo/rescale-arbitrary-precision.svg)](https://travis-ci.org/javiercejudo/rescale-arbitrary-precision)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/rescale-arbitrary-precision/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/rescale-arbitrary-precision?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/rescale-arbitrary-precision/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/rescale-arbitrary-precision)

Arbitrary precision for rescale

## Install

    npm i rescale-arbitrary-precision

## Usage

```js
var arbitraryPrecision = require('rescale-arbitrary-precision');

arbitraryPrecision.isAvailable(); // => false
arbitraryPrecision.load(); // => arbitrary precision API (Big.js, bignumber.js or decimal.js), or undefined if none available
arbitraryPrecision.isAvailable(); // => true, or false if no decimal library is installed
```

See [spec](test/spec.js).

## Related projects

- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter with built in conversions for common units.
- [rescale](https://github.com/javiercejudo/rescale): rescales a point given two scales.
- [rescale-util](https://github.com/javiercejudo/rescale-util): Rescale utilities.
- [scale](https://github.com/javiercejudo/scale): scales normalised data.
- [normalise](https://github.com/javiercejudo/normalise): normalise data to [0, 1].
