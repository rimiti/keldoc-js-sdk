// @flow
import BadRequest from './exceptions/bad_request';
import axios from 'axios';

export default class Common {
  constructor() {
  }

  send(body: {}) {
    if (400) throw new BadRequest();
  }
}
