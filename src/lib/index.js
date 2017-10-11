// @flow
import SDK from '../classes';

const configuration = {};

module.exports = {
  create: function create(): SDK {
    return new SDK(configuration);
  },
};
