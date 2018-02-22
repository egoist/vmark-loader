const vmark = require('vmark')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this) || {}
  return vmark(source, options).component
}
