// @flow
import Common from '../common';

export default class Availabilities extends Common {
  get(): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.availabilities.ressourceUrl}`;
    return super.get(url);
  }
}
