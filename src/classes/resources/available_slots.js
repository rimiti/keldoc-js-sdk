// @flow
import Common from '../common';
import Validation from '../validation';
import type {fetchAvailabilitiesRequest} from '../types';

export default class AvailableSlots extends Common {
  /**
   * @description Get availabilities.
   * @param body
   * @return {Promise.<any>}
   */
  get(body: fetchAvailabilitiesRequest): Promise<any> {
    const url = `${this.configuration.routes.available_slots}`;
    return Validation.validateFetchAvailableSlots(body)
      .then(() => super.getRequest(url, body));
  }
}