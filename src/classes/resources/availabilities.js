// @flow
import Common from '../common';
import Validation from '../validation';
import type {fetchAvailabilitiesRequest} from '../types';

export default class Availabilities extends Common {
  get(body: fetchAvailabilitiesRequest) : Promise<any> {
    const url = `${this.configuration.routes.availabilities}`;
    return Validation.validateFetchAvailabilities(body).then(() => super.getRequest(url, body));
  }
}
