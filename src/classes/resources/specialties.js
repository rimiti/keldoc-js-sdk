// @flow
import Common from '../common';

export default class Specialities extends Common {
  /**
   * @description Get specialities.
   * @return {Promise.<any>}
   */
  get(): Promise<any> {
    const url = `${this.configuration.routes.specialties}.json`;
    return super.getRequest(url);
  }
}
