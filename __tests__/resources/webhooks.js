// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Config', () => {
  beforeAll((done) => {
    sdk.configure({
      auth_token: '165416s5dfsds564sfdf2df',
      host: 'http://www.example.com',
      routes: {
        agendas: '/agendas.json',
        appointments: '/appointments',
        availabilities: '/availabilities',
        motives: '/motives.json',
        patients: '/patients',
        specialties: '/specialties',
        config: '/config',
        webhooks: '/config/webhooks',
      },
    });

    instance = sdk.create();
    done();
  });

  afterEach(() => mock.reset());

  it('Lazy loading', (done) => {
    mock.onPost('http://www.example.com/config/webhooks').reply(200);
    return Promise.all([
      instance.webhooks,
      instance.webhooks,
    ])
      .then((instances) => {
        expect(instances[0] === instances[1]);
        return Promise.all([
          instances[0].create({url: 'http://test.webhook.com'}),
          instances[1].create({url: 'http://test.webhook.com'}),
        ]);
      })
      .then((requests) => {
        expect(requests[0].status).toEqual(200);
        expect(requests[1].status).toEqual(200);
        done();
      });
  });

  it('POST', (done) => {
    mock.onPost('http://www.example.com/config/webhooks', {url: 'http://test.webhook.com'})
      .reply(200, {url: 'https://partner.com/callback'});
    instance.webhooks.create({url: 'http://test.webhook.com'})
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });

  it('PUT', (done) => {
    mock.onPut('http://www.example.com/config/webhooks')
      .reply(200, {url: 'https://partner.com/callback'});
    instance.webhooks.update()
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });

  it('DELETE', (done) => {
    mock.onDelete('http://www.example.com/config/webhooks').reply(200);
    instance.webhooks.remove()
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });
});
