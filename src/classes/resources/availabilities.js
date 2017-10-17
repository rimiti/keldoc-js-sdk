// @flow
import Common from '../common';

export default class Availabilities extends Common {
  get() : Promise<any> {
    const url = `${this.configuration.routes.availabilities}`;
    return super.get(url);
  }
}
