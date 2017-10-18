// @flow
import Common from '../common';
import Validation from '../validation';

export default class Webhooks extends Common {
  create(body: { url: string }): Promise<any> {
    Validation.validateCreateWebhook(body);
    const url = `${this.configuration.routes.webhooks}`;
    return super.postRequest(url, body);
  }

  update(body: {}): Promise<any> {
    const url = `${this.configuration.routes.webhooks}`;
    return super.putRequest(url, body);
  }

  remove(): Promise<any> {
    const url = `${this.configuration.routes.webhooks}`;
    return super.deleteRequest(url);
  }
}
