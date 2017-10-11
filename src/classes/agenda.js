// @flow
import Common from './common';

export default class Agenda extends Common {
  get() {
    return Common.get(this.configuration.routes.agenda.list);
  }
}
