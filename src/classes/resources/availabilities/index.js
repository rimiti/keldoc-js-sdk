// @flow
import Common from '../../common';
import Validation from '../../validation';
import type {fetchAvailabilitiesRequest} from '../../types';

export default class Availabilities extends Common {
  /**
   * @description Get availabilities.
   * @param params
   * @return {Promise.<any>}
   */
  get(params: fetchAvailabilitiesRequest): Promise<any> {
    const url = `${this.configuration.routes.availabilities}`;
    return Validation.validateFetchAvailabilities(params)
      .then(() => super.getRequest(url, params));
  }
}
