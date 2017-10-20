// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Patients', () => {
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

  it('POST', (done) => {
    mock.onPost('http://www.example.com/patients', {}).reply(200, {
      first_name: 'Julien',
      last_name: 'Flandrin',
      birth_date: '2001-09-23',
      email: 'julien@keldoc.com',
      phone: '0677889944',
      gender: 'm',
      street: '4 rue du Boc',
      city: 'Paris',
      zipcode: '75007',
    });
    instance.patients.create({}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });

  it('PUT', (done) => {
    mock.onPut('http://www.example.com/patients/12026', {}).reply(200, {
      first_name: 'Julien',
      last_name: 'Flandrin',
      birth_date: '2001-09-23',
      email: 'julien@keldoc.com',
      phone: '0677889944',
      gender: 'm',
      street: '4 rue du Boc',
      city: 'Paris',
      zipcode: '75007',
    });
    instance.patients.update(12026, {}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
