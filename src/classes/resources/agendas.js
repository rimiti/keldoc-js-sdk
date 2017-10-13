// @flow
import Common from '../common';

export default class Agendas extends Common {
  get(): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.agendas.ressourceUrl}`;
    return super.get(url);
  }
}
