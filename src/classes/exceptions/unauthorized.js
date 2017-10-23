// @flow
import Exception from './base';

export default class Unauthorized extends Exception {
  constructor(message: ?string) {
    super();
    this.message = message || 'Your API key is invalid.';
  }
}
