// @flow
import Exception from './base';

export default class InternalError extends Exception {
  constructor(message: ?string) {
    super();
    this.message = message || 'An error occurred with our API.';
  }
}
