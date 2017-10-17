// @flow
import Common from '../common';

export default class Specialties extends Common {
  get() : Promise<any> {
    const url = `${this.configuration.routes.specialties}`;
    return super.get(url);
  }
}
