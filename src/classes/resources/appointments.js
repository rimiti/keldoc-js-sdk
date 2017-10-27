// @flow
import Common from '../common';
import Validation from '../validation';

export default class Appointments extends Common {
  /**
   * @description Create appointment.
   * @param body
   * @return {Promise.<any>}
   */
  create(body: { start_at: string }): Promise<any> {
    const url = `${this.configuration.routes.appointments}.json`;
    return Validation.validateCreateAppointment(body)
      .then(() => super.postRequest(url, body));
  }

  /**
   * @description Update appointment.
   * @param id
   * @param body
   * @return {Promise.<any>}
   */
  update(id: number, body: { start_at: string }): Promise<any> {
    const url = `${this.configuration.routes.appointments}/${id.toString()}.json`;
    return Validation.validateUpdateAppointment(body)
      .then(() => super.putRequest(url, body));
  }

  /**
   * @description Remove appointment.
   * @param id
   * @return {Promise.<any>}
   */
  remove(id: number): Promise<any> {
    const url = `${this.configuration.routes.appointments}/${id.toString()}.json`;
    return super.deleteRequest(url);
  }
}
