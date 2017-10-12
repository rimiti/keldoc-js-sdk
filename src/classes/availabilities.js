// @flow
import Common from './common';

export default class Availabilities extends Common {

  get() : Promise<Object> {
    return super.get(this.configuration.host + this.configuration.routes.availabilities.ressourceUrl);
  }

}
