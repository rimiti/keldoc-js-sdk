// @flow
import Common from '../../../common';
import Validation from '../../../validation';

export default class ConfigWebhooks extends Common {
  /**
   * @description Create webhook.
   * @param body
   * @return {Promise.<any>}
   */
  create(body: { url: string }): Promise<any> {
    const url = `${this.configuration.routes.configWebhooks}`;
    return Validation.validateCreateWebhook(body)
      .then(() => super.postRequest(url, body));
  }

  /**
   * @description Update webhook.
   * @param body
   * @return {Promise.<any>}
   */
  update(body: {}): Promise<any> {
    const url = `${this.configuration.routes.configWebhooks}`;
    return super.putRequest(url, body);
  }

  /**
   * @description Remove webhook.
   * @return {Promise.<any>}
   */
  remove(): Promise<any> {
    const url = `${this.configuration.routes.configWebhooks}`;
    return super.deleteRequest(url);
  }
}
