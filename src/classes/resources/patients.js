// @flow
import Common from '../common';

export default class Patients extends Common {
  create(body: {}): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.patients.ressourceUrl}`;
    return super.post(url, body);
  }

  update(id: number, body: {}): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.patients.ressourceUrl}/${id}`;
    return super.put(url, body);
  }
}
