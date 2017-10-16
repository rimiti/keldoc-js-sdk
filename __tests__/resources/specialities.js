// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Specialities', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });
  afterEach(() => {
    mock.reset();
  });
  it('GET', (done) => {
    mock.onGet('/http://www.example.com/specialties', {}).reply(200, [{
      id: 3,
      name: 'ORL',
    }, {
      id: 45,
      name: 'Gynécologue',
    }]);
    instance.specialties.get({}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
