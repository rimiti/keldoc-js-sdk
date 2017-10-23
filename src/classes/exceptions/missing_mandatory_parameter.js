// @flow
import Exception from './base';

export default class MissingMandatoryParameter extends Exception {
  constructor(message: ?string) {
    super();
    this.message = message || 'Missing required params';
  }
}
