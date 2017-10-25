// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Motives', () => {
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
    mock.onGet('http://www.example.com/motives.json').reply(200);
    return Promise.all([
      instance.motives,
      instance.motives,
    ])
      .then((instances) => {
        expect(instances[0] === instances[1]);
        return Promise.all([
          instances[0].get(),
          instances[1].get(),
        ]);
      })
      .then((requests) => {
        expect(requests[0].status).toEqual(200);
        expect(requests[1].status).toEqual(200);
        done();
      });
  });

  it('GET', (done) => {
    mock.onGet('http://www.example.com/motives.json')
      .reply(200, [{
        id: 366,
        name: 'Consultation',
        specialty_id: 3,
        duration: 20,
      }, {
        id: 587,
        name: 'Urgence',
        specialty_id: 3,
        duration: 20,
      }, {
        id: 465,
        name: 'Consultation simple',
        specialty_id: 45,
        duration: 20,
      }]);
    instance.motives.get()
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });
});
