// @flow
import Common from '../../common';

export default class Patients extends Common {
  /**
   * @description Create patient.
   * @param body
   * @return {Promise.<any>}
   */
  create(body: {}): Promise<any> {
    const url = `${this.configuration.routes.patients}.json`;
    return super.postRequest(url, body);
  }

  /**
   * @description Update patient.
   * @param id
   * @param body
   * @return {Promise.<any>}
   */
  update(id: number, body: {}): Promise<any> {
    const url = `${this.configuration.routes.patients}/${id}.json`;
    return super.putRequest(url, body);
  }
}
