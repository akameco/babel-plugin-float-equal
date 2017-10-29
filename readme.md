# babel-plugin-float-equal
[![Build Status](https://travis-ci.org/akameco/babel-plugin-float-equal.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-float-equal)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> Babel plugin for float equal

## Why

```js
0.1 + 0.2 === 0.3
// => false
```

WTF!?!??
Because there is rounding error.

Use this plugin.

```js
0.1 + 0.2 === 0.3
// => true
```

In many cases, this one is more convenient.
However, you should avoid using floating point numbers.

## Install

```
$ npm install --save-dev babel-plugin-float-equal
```

## Usage

.babelrc

```js
{
  plugins: ["float-equal"]
}
```

## Example

```js
0.1 + 0.2 === 0.3

      ↓ ↓ ↓ ↓ ↓ ↓

typeof (0.1 + 0.2) === 'number' && typeof 0.3 === 'number'
  ? Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
  : 0.1 + 0.2 === 0.3
```


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/typed-assign/commits?author=akameco "Code") [📖](https://github.com/akameco/typed-assign/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/typed-assign/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
