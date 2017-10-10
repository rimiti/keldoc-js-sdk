// @flow
import Exception from './base';

export default class ValidationError extends Exception {
  constructor(message: ?string) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'A validation error occurred.';
  }
}
