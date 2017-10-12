// @flow
import Common from './common';

export default class Patients extends Common {

  create(body: {}) : Promise<Object> {
    return super.post(this.configuration.host + this.configuration.routes.patients.ressourceUrl, body);
  }

  update(id: number, body: {}) : Promise<Object> {
    return super.put(this.configuration.host + this.configuration.routes.patients.ressourceUrl + '/' + id, body);
  }

}
