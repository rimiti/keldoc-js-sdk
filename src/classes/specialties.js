// @flow
import Common from './common';

export default class Specialties extends Common {

  get() : Promise<Object> {
    return super.get(this.configuration.host + this.configuration.routes.specialties.ressourceUrl);
  }

}
