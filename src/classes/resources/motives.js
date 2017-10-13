// @flow
import Common from '../common';

export default class Motives extends Common {
  get(): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.motives.ressourceUrl}`;
    return super.get(url);
  }
}
