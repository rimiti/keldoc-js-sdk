// @flow
import Common from '../common';

export default class Config extends Common {
  get(): Promise<any> {
    const url = `${this.configuration.routes.config}`;
    return super.get(url);
  }
}
