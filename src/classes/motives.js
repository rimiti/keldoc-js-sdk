// @flow
import Common from './common';

export default class Motives extends Common {

  get() : Promise<Object> {
    return super.get(this.configuration.host + this.configuration.routes.motives.ressourceUrl);
  }

}
