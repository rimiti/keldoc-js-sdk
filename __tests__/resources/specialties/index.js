// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../../src';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Specialities', () => {
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
    mock.onGet('http://www.example.com/specialties').reply(200);
    return Promise.all([
      instance.specialties,
      instance.specialties,
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
    mock.onGet('http://www.example.com/specialties', {})
      .reply(200, [{
        id: 3,
        name: 'ORL',
      }, {
        id: 45,
        name: 'Gynécologue',
      }]);
    instance.specialties.get().then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
