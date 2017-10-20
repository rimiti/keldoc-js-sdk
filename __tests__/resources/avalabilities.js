// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Avalabilities', () => {
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

  it('GET', (done) => {
    mock.onGet('http://www.example.com/availabilities', {
      agenda_ids: 112,
      end_date: '2017-09-18',
      start_date: '2017-09-18',
      motive_id: '366',
    })
      .reply(200, [{
        id: 1,
        name: 'Dr. KelDoc test',
      }, {
        id: 2,
        name: 'Dr. KelDoc test2',
      }, {
        id: 3,
        name: 'Dr. KelDoc test3',
      }]);
    instance.availabilities.get({
      agenda_ids: 112,
      end_date: '2017-09-18',
      start_date: '2017-09-18',
      motive_id: '366',
    }).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });

    // lazy loading availabities test
    instance.availabilities.get({
      agenda_ids: 112,
      end_date: '2017-09-18',
      start_date: '2017-09-18',
      motive_id: '366',
    }).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
