// @flow
import Common from '../../common';
import Validation from '../../validation';
import type {fetchAvailableSlotsRequest} from '../../types';

export default class AvailableSlots extends Common {
  /**
   * @description Get availabilities.
   * @param options
   * @return {Promise.<any>}
   */
  get(options: fetchAvailableSlotsRequest): Promise<any> {
    const url = `${this.configuration.routes.availableSlots}`;
    return Validation.validateFetchAvailableSlots(options)
      .then(() => super.getRequest(url, options));
  }
}
