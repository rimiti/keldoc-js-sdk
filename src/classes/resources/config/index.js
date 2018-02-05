// @flow
import Common from '../../common';

export default class Config extends Common {
  /**
   * @description Get configuration.
   * @return {Promise.<any>}
   */
  get(): Promise<any> {
    const url = `${this.configuration.routes.config}`;
    return super.getRequest(url);
  }
}
