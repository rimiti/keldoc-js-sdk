// @flow
import Common from './common';

export default class Agendas extends Common {
  get() {
    return super.get(this.configuration.host + this.configuration.routes.agendas.ressourceUrl);
  }

}
