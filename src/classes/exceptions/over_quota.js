// @flow
import Exception from './base';

export default class OverQuota extends Exception {
  constructor(message: ?string) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'Over plan quota on this endpoint.';
  }
}
