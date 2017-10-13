// @flow
import Common from '../common';

export default class Config extends Common {
  get(): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.config.ressourceUrl}`;
    return super.get(url);
  }
}
