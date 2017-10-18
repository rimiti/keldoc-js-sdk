// @flow
import Common from '../common';
import Validation from '../validation';
import type {fetchAvailabilitiesRequest} from '../types';

export default class Availabilities extends Common {
  get(body: fetchAvailabilitiesRequest) : Promise<any> {
    Validation.validateFetchAvailabilities(body);
    const url = `${this.configuration.routes.availabilities}`;
    return super.getRequest(url, body);
  }
}
