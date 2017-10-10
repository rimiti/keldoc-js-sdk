// @flow
import Exception from './base';

export default class NotAcceptable extends Exception {
  constructor(message: string) {
    super();
    this.name = this.constructor.name;
    this.message = message || `The requested resource is capable of generating only content not acceptable according 
    to the Accept headers sent in the request.`;
  }
}
