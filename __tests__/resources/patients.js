// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Patients', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });
  it('POST', (done) => {
    mock.onPost('/http://www.example.com/patients.json', {}).reply(200, {
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
    mock.onPut('/http://www.example.com/patients.json', {}).reply(200, {
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
    instance.patients.update({}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
