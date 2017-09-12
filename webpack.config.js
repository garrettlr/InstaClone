// @flow

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./webpack.config.prod'); // eslint-disable-line global-require
  //eslint-enable
} else {
  module.exports = require('./webpack.config.dev'); // eslint-disable-line global-require
  //eslint-enable
}
