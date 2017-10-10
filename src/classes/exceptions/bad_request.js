// @flow
import Exception from './base';

export default class BadRequest extends Exception {
  constructor(message: ?string) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'Bad request.';
  }
}
