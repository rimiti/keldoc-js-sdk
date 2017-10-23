// @flow
import Common from '../common';

export default class Agendas extends Common {
  /**
   * @description Get agendas.
   * @return {Promise.<any>}
   */
  get(): Promise<any> {
    const url = `${this.configuration.routes.agendas}`;
    return super.getRequest(url);
  }
}
