// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Agendas', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });
  it('GET', (done) => {
    mock.onGet('/http://www.example.com/agendas.json', {}).reply(200, [{
      id: 1,
      name: 'Dr. KelDoc test',
    }, {
      id: 2,
      name: 'Dr. KelDoc test2',
    }, {
      id: 3,
      name: 'Dr. KelDoc test3',
    }]);
    instance.agendas.get().then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
