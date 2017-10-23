// @flow
import Common from '../common';

export default class Motives extends Common {
  /**
   * @description Get motives.
   * @return {Promise.<any>}
   */
  get(): Promise<any> {
    const url = `${this.configuration.routes.motives}`;
    return super.getRequest(url);
  }
}
