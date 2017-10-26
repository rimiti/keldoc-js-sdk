// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Patients', () => {
  beforeAll((done) => {
    sdk.configure({
      auth_token: '165416s5dfsds564sfdf2df',
      host: 'http://www.example.com',
    });

    instance = sdk.create();
    done();
  });

  afterEach(() => mock.reset());

  it('Lazy loading', (done) => {
    mock.onPost('http://www.example.com/patients').reply(200);
    return Promise.all([
      instance.patients,
      instance.patients,
    ])
      .then((instances) => {
        expect(instances[0] === instances[1]);
        return Promise.all([
          instances[0].create(),
          instances[1].create(),
        ]);
      })
      .then((requests) => {
        expect(requests[0].status).toEqual(200);
        expect(requests[1].status).toEqual(200);
        done();
      });
  });

  it('POST', (done) => {
    mock.onPost('http://www.example.com/patients')
      .reply(200, {
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
    instance.patients.create()
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });

  it('PUT', (done) => {
    mock.onPut('http://www.example.com/patients/12026')
      .reply(200, {
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
    instance.patients.update(12026)
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });
});
