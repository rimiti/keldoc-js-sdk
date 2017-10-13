// @flow
import Common from '../common';

export default class Webhooks extends Common {
  create(body: {}): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.webhooks.ressourceUrl}`;
    return super.post(url, body);
  }

  update(body: {}): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.webhooks.ressourceUrl}`;
    return super.put(url, body);
  }

  delete(body: {}): Promise < Object > {
    const url = `${this.configuration.host}/${this.configuration.routes.webhooks.ressourceUrl}`;
    return super.delete(url, body);
  }
}
