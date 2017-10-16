// @flow
import Common from '../common';

export default class Appointments extends Common {
  create(body: {}): Promise < Object > {
    this.validator.validateCreateAppointment(body);
    const url = `${this.configuration.host}/${this.configuration.routes.appointments.ressourceUrl}`;
    return super.post(url, body);
  }

  update(id: number, body: {}): Promise < Object > {
    this.validator.validateUpdateAppointment(body);
    const url = `${this.configuration.host}/${this.configuration.routes.appointments.ressourceUrl}/${id}.json`;
    return super.put(url, body);
  }

  delete(id: number, body: {}): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.appointments.ressourceUrl}/${id}.json`;
    return super.delete(url, body);
  }
}
