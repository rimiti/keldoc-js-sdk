// @flow
import Common from './common';

export default class Agenda extends Common {
  static get() {
    Agenda.send({});
  }
  static test() : void {
    console.log('tesst');
  }
}
