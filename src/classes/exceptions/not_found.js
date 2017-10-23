// @flow
import Exception from './base';

export default class NotFound extends Exception {
  constructor(message: ?string) {
    super();
    this.message = message || 'The resource does not exist.';
  }
}
