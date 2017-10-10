// @flow
import Exception from './base';

export default class Unauthorized extends Exception {
  constructor(message: ?string) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'Your API key is invalid.';
  }
}
