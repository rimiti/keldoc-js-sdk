// @flow
import Common from './common';

export default class Agenda extends Common {
  get() {
    Common.send({});
  }

  test(): void {
    console.log('I\'m called from my test.');
  }
}
