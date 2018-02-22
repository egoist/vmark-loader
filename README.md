
# vmark-loader

[![NPM version](https://img.shields.io/npm/v/vmark-loader.svg?style=flat)](https://npmjs.com/package/vmark-loader) [![NPM downloads](https://img.shields.io/npm/dm/vmark-loader.svg?style=flat)](https://npmjs.com/package/vmark-loader) [![CircleCI](https://circleci.com/gh/egoist/vmark-loader/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vmark-loader/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

Webpack loader for [vmark](https://github.com/egoist/vmark).

## Install

```bash
yarn add vmark vmark-loader --dev
```

## Usage

`webpack.config.js`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'vmark-loader' 
      }
    ]
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vmark-loader** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vmark-loader/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
