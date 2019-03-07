// @flow
import Common from '../../common';
import Validation from '../../validation';
import type {fetchAvailableSlotsRequest} from '../../types';

export default class AvailableSlots extends Common {
  /**
   * @description Get availabilities.
   * @param params
   * @return {Promise.<any>}
   */
  get(params: fetchAvailableSlotsRequest): Promise<any> {
    const url = `${this.configuration.routes.availableSlots}`;
    return Validation.validateFetchAvailableSlots(params)
      .then(() => super.getRequest(url, params));
  }
}
