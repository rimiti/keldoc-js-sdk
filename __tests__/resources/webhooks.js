// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Config', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });
  it('POST', (done) => {
    mock.onPost('/http://www.example.com/config/webhooks', {})
      .reply(200, {
        url: 'https://partner.com/callback',
      });
    instance.webhooks.create({}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });

  it('PUT', (done) => {
    mock.onPut('/http://www.example.com/config/webhooks', {})
      .reply(200, {
        url: 'https://partner.com/callback',
      });
    instance.webhooks.update({}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });

  it('DELETE', (done) => {
    mock.onDelete('/http://www.example.com/config/webhooks', {})
      .reply(200, {});
    instance.webhooks.delete({}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
