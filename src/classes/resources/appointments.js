// @flow
import Common from '../common';
import Validation from '../validation';

export default class Appointments extends Common {
  create(body: { start_at: string }): Promise<any> {
    const url = `${this.configuration.routes.appointments}`;
    return Validation.validateCreateAppointment(body)
      .then(() => super.postRequest(url, body));
  }

  update(id: number, body: { start_at: string }): Promise<any> {
    const url = `${this.configuration.routes.appointments}/${id.toString()}.json`;
    return Validation.validateUpdateAppointment(body)
      .then(() => super.putRequest(url, body));
  }

  remove(id: number): Promise<any> {
    const url = `${this.configuration.routes.appointments}/${id.toString()}.json`;
    return super.deleteRequest(url);
  }
}
