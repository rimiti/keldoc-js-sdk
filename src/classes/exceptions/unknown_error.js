// @flow
import Exception from './base';

export default class UnknownError extends Exception {
  constructor(message: ?string) {
    super();
    this.message = message || 'An unknown error occurred with API.';
  }
}
