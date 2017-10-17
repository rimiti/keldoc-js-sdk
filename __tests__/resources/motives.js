// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Motives', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });
  afterEach(() => {
    mock.reset();
  });
  it('GET', (done) => {
    mock.onGet('http://www.example.com/motives.json', {}).reply(200, [{
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
    instance.motives.get({}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
