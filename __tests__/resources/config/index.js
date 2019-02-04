// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../../src';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Config', () => {
  beforeAll((done) => {
    sdk.configure({
      credentials: {
        clientAccessKeyId: 'CLIENT_ACCESS_KEY_ID',
        secretAccessKeyId: 'SECRET_ACCESS_KEY_ID',
      },
      host: 'http://www.example.com',
    });

    instance = sdk.create();
    done();
  });

  afterEach(() => mock.reset());

  it('Lazy loading', (done) => {
    mock.onGet('http://www.example.com/partners/config').reply(200);
    return Promise.all([
      instance.config,
      instance.config,
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
    mock.onGet('http://www.example.com/partners/config')
      .reply(200, {
        agendas: [{
          id: 552,
          name: 'Dr. Pierre KelDoc',
        }, {
          id: 112,
          name: 'Dr. Céline KelDoc',
        }, {
          id: 1671,
          name: 'Salle n1671',
        }],
        motives: [{
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
        }, {
          id: 824,
          name: 'echographie',
          specialty_id: 45,
          duration: 20,
        }, {
          id: 738,
          name: 'urgence',
          specialty_id: 45,
          duration: 20,
        }, {
          id: 673,
          name: 'test',
          specialty_id: 45,
          duration: 20,
        }],
        specialties: [{
          id: 3,
          name: 'ORL',
        }, {
          id: 45,
          name: 'Gynécologue',
        },
        ],
      });

    instance.config.get()
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });
});
