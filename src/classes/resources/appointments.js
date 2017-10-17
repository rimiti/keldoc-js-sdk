// @flow
import Common from '../common';
import Validation from '../validation';

export default class Appointments extends Common {
  create(body: {start_at: string}) : Promise<any> {
    Validation.validateCreateAppointment(body);
    const url = `${this.configuration.routes.appointments}`;
    return super.post(url, body);
  }

  update(id: number, body: {start_at: string}) : Promise<any> {
    Validation.validateUpdateAppointment(body);
    const url = `${this.configuration.routes.appointments}/${id.toString()}.json`;
    return super.put(url, body);
  }

  remove(id: number) : Promise<any> {
    const url = `${this.configuration.routes.appointments}/${id.toString()}.json`;
    return super.delete(url);
  }
}