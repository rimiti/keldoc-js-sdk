// @flow
import Common from '../common';

export default class Specialties extends Common {
  get(): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.specialties.ressourceUrl}`;
    return super.get(url);
  }
}
