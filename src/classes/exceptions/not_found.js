// @flow
import Exception from './base';

export default class NotFound extends Exception {
  constructor(message: string) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'The resource does not exist.';
  }
}
