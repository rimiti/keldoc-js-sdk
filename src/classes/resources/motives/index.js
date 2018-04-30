// @flow
import Common from '../../common';
import type {fetchMotivesRequest} from '../../types';

export default class Motives extends Common {
  /**
   * @description Get motives.
   * @return {Promise.<any>}
   */
  get(options: fetchMotivesRequest): Promise<any> {
    const url = `${this.configuration.routes.motives}`;
    return super.getRequest(url, options);
  }
}
