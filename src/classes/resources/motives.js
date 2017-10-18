// @flow
import Common from '../common';

export default class Motives extends Common {
  get(): Promise<any> {
    const url = `${this.configuration.routes.motives}`;
    return super.getRequest(url);
  }
}
