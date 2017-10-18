// @flow
import Common from '../common';

export default class Patients extends Common {
  create(body: {}): Promise<any> {
    const url = `${this.configuration.routes.patients}`;
    return super.postRequest(url, body);
  }

  update(id: number, body: {}): Promise<any> {
    const url = `${this.configuration.routes.patients}/${id}`;
    return super.putRequest(url, body);
  }
}
