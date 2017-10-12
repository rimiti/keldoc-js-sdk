// @flow
import Common from './common';

export default class Appointments extends Common {

  create(body: {}) : Promise<Object> {
    return super.post(this.configuration.host + this.configuration.routes.appointments.ressourceUrl, body);
  }

  update(id: number, body: {}) : Promise<Object> {
    return super.put(this.configuration.host + this.configuration.routes.appointments.ressourceUrl + '/' + id, body);
  }

  delete(id: number) : Promise<Object> {
    return super.delete(this.configuration.host + this.configuration.routes.appointments.ressourceUrl + '/' + id);
  }

}
