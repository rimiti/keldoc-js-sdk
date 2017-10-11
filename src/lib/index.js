// @flow
import SDK from '../classes';

const configuration = {
  auth_token: '1wxcvdfgdfgdfgdfg2131454sdf',
  routes: {
    agenda: {
      list: 'https://httpbin.org/get',
    },
  },
};

module.exports = {
  create: function create(): SDK {
    return new SDK(configuration);
  },
};
